// Configuration
const API_BASE_URL = "https://exa-fastapi-backend.onrender.com"; // Update this with your backend URL

// State
let searchResults = [];
let selectedResults = new Set();

// DOM Elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const advancedToggle = document.getElementById("advanced-toggle");
const advancedOptions = document.getElementById("advanced-options");
const numResults = document.getElementById("num-results");
const searchType = document.getElementById("search-type");
const includeDomains = document.getElementById("include-domains");
const excludeDomains = document.getElementById("exclude-domains");

const searchSection = document.getElementById("search-section");
const resultsSection = document.getElementById("results-section");
const summarySection = document.getElementById("summary-section");
const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error-message");
const errorText = document.getElementById("error-text");
const loadingText = document.getElementById("loading-text");

const resultsList = document.getElementById("results-list");
const resultsCount = document.getElementById("results-count");
const selectionCount = document.getElementById("selection-count");
const generateSummaryBtn = document.getElementById("generate-summary-btn");
const newSearchBtn = document.getElementById("new-search-btn");

const summaryText = document.getElementById("summary-text");
const keyPointsSection = document.getElementById("key-points-section");
const keyPointsList = document.getElementById("key-points-list");
const sourcesList = document.getElementById("sources-list");
const closeSummaryBtn = document.getElementById("close-summary-btn");
const exportSummaryBtn = document.getElementById("export-summary-btn");
const copySummaryBtn = document.getElementById("copy-summary-btn");

const apiStatus = document.getElementById("api-status");
const retryBtn = document.getElementById("retry-btn");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  checkAPIHealth();
  setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
  searchForm.addEventListener("submit", handleSearch);
  advancedToggle.addEventListener("click", toggleAdvancedOptions);
  generateSummaryBtn.addEventListener("click", handleGenerateSummary);
  newSearchBtn.addEventListener("click", resetToSearch);
  closeSummaryBtn.addEventListener("click", () =>
    summarySection.classList.add("hidden")
  );
  exportSummaryBtn.addEventListener("click", exportSummary);
  copySummaryBtn.addEventListener("click", copySummaryToClipboard);
  retryBtn.addEventListener("click", () => {
    errorEl.classList.add("hidden");
    searchSection.classList.remove("hidden");
  });
}

// Check API Health
async function checkAPIHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const data = await response.json();

    const statusDot = apiStatus.querySelector(".status-dot");
    const statusText = apiStatus.querySelector(".status-text");

    if (data.status === "healthy") {
      statusDot.className = "status-dot status-healthy";
      statusText.textContent = "API Online";
    } else {
      statusDot.className = "status-dot status-degraded";
      statusText.textContent = "Limited";
    }
  } catch (error) {
    const statusDot = apiStatus.querySelector(".status-dot");
    const statusText = apiStatus.querySelector(".status-text");
    statusDot.className = "status-dot status-error";
    statusText.textContent = "Offline";
  }
}

// Toggle Advanced Options
function toggleAdvancedOptions() {
  advancedOptions.classList.toggle("open");
  advancedToggle.querySelector(".chevron").classList.toggle("rotate");
}

// Handle Search
async function handleSearch(e) {
  e.preventDefault();

  const query = searchInput.value.trim();
  if (!query) return;

  // Build request
  const request = {
    query: query,
    num_results: parseInt(numResults.value) || 10,
    search_type: searchType.value,
  };

  // Add optional filters
  if (includeDomains.value.trim()) {
    request.include_domains = includeDomains.value
      .split(",")
      .map((d) => d.trim())
      .filter(Boolean);
  }
  if (excludeDomains.value.trim()) {
    request.exclude_domains = excludeDomains.value
      .split(",")
      .map((d) => d.trim())
      .filter(Boolean);
  }

  // Show loading
  showLoading("Searching...");
  hideError();

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`Search failed: ${response.statusText}`);
    }

    const data = await response.json();
    searchResults = data.results || [];
    selectedResults.clear();

    displayResults(searchResults, query);
    hideLoading();
  } catch (error) {
    console.error("Search error:", error);
    showError(error.message || "Search failed. Please try again.");
    hideLoading();
  }
}

// Display Results
function displayResults(results, query) {
  searchSection.classList.add("hidden");
  resultsSection.classList.remove("hidden");
  summarySection.classList.add("hidden");

  resultsCount.textContent = `${results.length} results for "${query}"`;
  resultsList.innerHTML = "";

  results.forEach((result, index) => {
    const resultCard = createResultCard(result, index);
    resultsList.appendChild(resultCard);
  });

  updateSelectionUI();
}

// Create Result Card
function createResultCard(result, index) {
  const card = document.createElement("div");
  card.className = "result-card";
  card.dataset.index = index;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "result-checkbox";
  checkbox.id = `result-${index}`;
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      selectedResults.add(index);
      card.classList.add("selected");
    } else {
      selectedResults.delete(index);
      card.classList.remove("selected");
    }
    updateSelectionUI();
  });

  const content = document.createElement("div");
  content.className = "result-content";
  content.innerHTML = `
        <div class="result-header">
            <h4 class="result-title">${escapeHtml(
              result.title || "Untitled"
            )}</h4>
            ${
              result.score
                ? `<span class="result-score">${(result.score * 100).toFixed(
                    0
                  )}%</span>`
                : ""
            }
        </div>
        <a href="${result.url}" target="_blank" class="result-url">${escapeHtml(
    result.url
  )}</a>
        <div class="result-meta">
            ${
              result.author
                ? `<span class="meta-item">👤 ${escapeHtml(
                    result.author
                  )}</span>`
                : ""
            }
            ${
              result.published_date
                ? `<span class="meta-item">📅 ${formatDate(
                    result.published_date
                  )}</span>`
                : ""
            }
        </div>
    `;

  card.appendChild(checkbox);
  card.appendChild(content);

  return card;
}

// Update Selection UI
function updateSelectionUI() {
  const count = selectedResults.size;
  selectionCount.textContent = `${count} result${
    count !== 1 ? "s" : ""
  } selected`;
  generateSummaryBtn.disabled = count === 0 || count > 5;

  if (count > 5) {
    selectionCount.textContent += " (max 5)";
  }
}

// Handle Generate Summary
async function handleGenerateSummary() {
  const selectedUrls = Array.from(selectedResults).map(
    (index) => searchResults[index].url
  );
  const query = searchInput.value.trim();

  if (selectedUrls.length === 0 || selectedUrls.length > 5) {
    return;
  }

  showLoading("Generating AI summary...");

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/generate-summary`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        urls: selectedUrls,
        query: query,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Summary generation failed");
    }

    const data = await response.json();
    displaySummary(data);
    hideLoading();
  } catch (error) {
    console.error("Summary generation error:", error);
    showError(error.message || "Failed to generate summary. Please try again.");
    hideLoading();
  }
}

// Display Summary
function displaySummary(data) {
  resultsSection.classList.add("hidden");
  summarySection.classList.remove("hidden");

  // Display summary text
  summaryText.innerHTML = `<p>${escapeHtml(data.summary).replace(
    /\n\n/g,
    "</p><p>"
  )}</p>`;

  // Display key points
  if (data.key_points && data.key_points.length > 0) {
    keyPointsSection.style.display = "block";
    keyPointsList.innerHTML = data.key_points
      .map((point) => `<li>${escapeHtml(point)}</li>`)
      .join("");
  } else {
    keyPointsSection.style.display = "none";
  }

  // Display sources
  sourcesList.innerHTML = data.sources
    .map(
      (source, i) => `
            <div class="source-item ${
              source.scraped_successfully ? "" : "failed"
            }">
                <div class="source-icon">${
                  source.scraped_successfully ? "✓" : "⚠"
                }</div>
                <div class="source-info">
                    <a href="${
                      source.url
                    }" target="_blank" class="source-title">
                        ${escapeHtml(source.title || source.url)}
                    </a>
                    ${
                      !source.scraped_successfully
                        ? '<span class="source-status">Failed to scrape</span>'
                        : ""
                    }
                </div>
            </div>
        `
    )
    .join("");
}

// Export Summary
function exportSummary() {
  const summaryData = {
    summary: summaryText.textContent,
    keyPoints: Array.from(keyPointsList.querySelectorAll("li")).map(
      (li) => li.textContent
    ),
    sources: Array.from(sourcesList.querySelectorAll(".source-title")).map(
      (a) => ({
        title: a.textContent,
        url: a.href,
      })
    ),
    generatedAt: new Date().toISOString(),
  };

  const blob = new Blob([JSON.stringify(summaryData, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `exa-summary-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// Copy Summary to Clipboard
async function copySummaryToClipboard() {
  const text = summaryText.textContent;
  try {
    await navigator.clipboard.writeText(text);
    copySummaryBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Copied!
        `;
    setTimeout(() => {
      copySummaryBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="5" y="5" width="8" height="8" stroke="currentColor" stroke-width="2"/>
                    <path d="M3 11V3h8" stroke="currentColor" stroke-width="2"/>
                </svg>
                Copy to Clipboard
            `;
    }, 2000);
  } catch (error) {
    console.error("Failed to copy:", error);
  }
}

// Reset to Search
function resetToSearch() {
  searchSection.classList.remove("hidden");
  resultsSection.classList.add("hidden");
  summarySection.classList.add("hidden");
  searchResults = [];
  selectedResults.clear();
  searchInput.focus();
}

// Show/Hide Loading
function showLoading(text = "Loading...") {
  loadingText.textContent = text;
  loadingEl.classList.remove("hidden");
  searchSection.classList.add("hidden");
  resultsSection.classList.add("hidden");
  summarySection.classList.add("hidden");
}

function hideLoading() {
  loadingEl.classList.add("hidden");
}

// Show/Hide Error
function showError(message) {
  errorText.textContent = message;
  errorEl.classList.remove("hidden");
  searchSection.classList.add("hidden");
  resultsSection.classList.add("hidden");
  summarySection.classList.add("hidden");
}

function hideError() {
  errorEl.classList.add("hidden");
}

// Utility Functions
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function formatDate(dateString) {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

// Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  // Press '/' to focus search
  if (e.key === "/" && !searchInput.matches(":focus")) {
    e.preventDefault();
    searchInput.focus();
  }

  // Press 'Escape' to go back
  if (e.key === "Escape") {
    if (!summarySection.classList.contains("hidden")) {
      summarySection.classList.add("hidden");
      resultsSection.classList.remove("hidden");
    } else if (!resultsSection.classList.contains("hidden")) {
      resetToSearch();
    }
  }
});
