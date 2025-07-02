<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-brand">
        <img src="/logo/vandelay-industries-logo.svg" alt="Vandelay Industries" class="sidebar-logo" />
      </div>
      <div class="sidebar-main">
        <nav class="sidebar-nav">
          <ul>
            <li class="nav-item active">
              <span class="nav-icon-active"><span class="material-symbols-rounded">home</span></span>
              <span class="nav-text">Dashboard</span>
            </li>
            <li class="nav-item">
              <span class="nav-icon-inactive"><span class="material-symbols-rounded">table_chart</span></span>
              <span class="nav-text">Tables</span>
            </li>
            <li class="nav-item">
              <span class="nav-icon-inactive"><span class="material-symbols-rounded">credit_card</span></span>
              <span class="nav-text">Billing</span>
            </li>
            <li class="nav-item">
              <span class="nav-icon-inactive"><span class="material-symbols-rounded">build</span></span>
              <span class="nav-text">RTL</span>
            </li>
          </ul>
        </nav>
        <hr class="sidebar-divider" />
      </div>
      <div class="sidebar-help">
        <div class="help-card">
          <div class="help-icon material-symbols-rounded">help</div>
          <div class="help-text-group">
            <div class="help-title">Need help?</div>
            <div class="help-desc">Please check our docs</div>
          </div>
          <button class="help-btn">Documentation</button>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Header -->
      <header class="dashboard-header">
        <div class="header-left">
          <nav class="breadcrumbs">
            <span class="breadcrumb-link">Pages</span>
            <span class="breadcrumb-separator material-symbols-rounded">chevron_right</span>
            <span class="breadcrumb-current">Dashboard</span>
          </nav>
          <h2 class="header-title">Dashboard</h2>
        </div>
        <div class="header-right">
          <div class="header-search">
            <span class="material-symbols-rounded search-icon">search</span>
            <input type="text" placeholder="Search" />
          </div>
          <div class="header-icon-btn">
            <span class="material-symbols-rounded">settings</span>
          </div>
          <div class="header-icon-btn">
            <span class="material-symbols-rounded">notifications</span>
          </div>
          <div class="header-divider"></div>
          <div class="header-profile" @click="toggleProfileDropdown" ref="profileBtn">
            <span class="profile-name">Ashley</span>
            <span class="material-symbols-rounded profile-arrow">arrow_drop_down</span>
            <div v-if="showProfileDropdown" class="profile-dropdown" ref="profileDropdown">
              <button class="profile-dropdown-item" @click.stop="logout">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <!-- Stat Cards -->
      <section class="stat-cards">
        <DashboardCard
          icon="account_balance_wallet"
          title="Today's Money"
          value="$53,000"
          trend="+55% this week"
          trendType="up"
        />
        <DashboardCard
          icon="group"
          title="Today's Users"
          value="2,300"
          trend="+5% this week"
          trendType="up"
        />
        <DashboardCard
          icon="person_add"
          title="New Clients"
          value="3,052"
          trend="-2% this week"
          trendType="down"
        />
        <DashboardCard
          icon="bar_chart_4_bars"
          title="Total Sales"
          value="$173,000"
          trend="+8% this week"
          trendType="up"
        />
      </section>

      <section class="promo-materials">
        <div class="promo-card promo-chakra">
          <div class="promo-chakra-content">
            <div class="promo-chakra-text-container">
              <div class="promo-chakra-title">Built by developers</div>
              <div class="promo-chakra-headline">Purity UI Dashboard</div>
              <div class="promo-chakra-desc">From colors, cards, typography to complex elements, you will find the full documentation.</div>
            </div>
            <button class="promo-chakra-btn">
              Read More
              <span class="material-symbols-rounded promo-btn-icon">open_in_new</span>
            </button>
          </div>
          <div class="promo-chakra-logo">
            <div class="chakra-logo-stack">
              <img src="/logo/chakra-logo.svg" alt="Chakra Logo" class="chakra-logo-img" />
              <img src="/logo/chakra-logo.svg" alt="Chakra Logo" class="chakra-logo-img" />
              <img src="/logo/chakra-logo.svg" alt="Chakra Logo" class="chakra-logo-img" />
              <img src="/logo/chakra-logo.svg" alt="Chakra Logo" class="chakra-logo-img" />
              <img src="/logo/chakra-logo.svg" alt="Chakra Logo" class="chakra-logo-img" />
              <img src="/logo/chakra-logo.svg" alt="Chakra Logo" class="chakra-logo-img" />
              <img src="/logo/chakra-logo.svg" alt="Chakra Logo" class="chakra-logo-img" />
              <img src="/logo/chakra-logo.svg" alt="Chakra Logo" class="chakra-logo-img" />
            </div>
          </div>
        </div>
        <div class="promo-card promo-rockets">
          <div class="promo-rockets-bg"></div>
          <div class="promo-rockets-overlay"></div>
          <div class="promo-rockets-content">
            <div class="promo-rockets-title">Work with the Rockets</div>
            <div class="promo-rockets-desc">Wealth creation is an evolutionary recent positive-sum game. It is all about who take the opportunity first.</div>
            <button class="promo-rockets-btn">
              Read More
              <span class="material-symbols-rounded promo-btn-icon">open_in_new</span>
            </button>
          </div>
        </div>
      </section>

      <section class="analytics-analytics-grid">
        <div class="analytics-chart-card bar-graph-style analytics-graph-card">
          <div class="bar-graph-header">
            <div class="bar-graph-text">
              <div class="bar-graph-title">Active Users</div>
              <div class="bar-graph-subtitle">
                <span class="material-symbols-rounded bar-graph-arrow">arrow_upward</span>
                +23 than last week
              </div>
            </div>
            <div class="bar-graph-filter">
              <div class="filter-button">
                <span class="material-symbols-rounded filter-icon">calendar_month</span>
                <span class="filter-text">Last 7 days</span>
              </div>
            </div>
          </div>
          <div class="bar-graph-chart">
            <svg width="100%" height="140" viewBox="0 0 736 145">
              <!-- Y-axis labels -->
              <g class="y-labels">
                <text x="12" y="22" class="y-label">500</text>
                <text x="12" y="40" class="y-label">400</text>
                <text x="12" y="60" class="y-label">300</text>
                <text x="12" y="80" class="y-label">200</text>
                <text x="12" y="100" class="y-label">100</text>
                <text x="12" y="120" class="y-label">0</text>
              </g>
              <!-- Grid lines -->
              <g class="grid-lines">
                <line x1="44" y1="14" x2="712" y2="14" class="grid-line" />
                <line x1="44" y1="35" x2="712" y2="35" class="grid-line" />
                <line x1="44" y1="55" x2="712" y2="55" class="grid-line" />
                <line x1="44" y1="75" x2="712" y2="75" class="grid-line" />
                <line x1="44" y1="97" x2="712" y2="97" class="grid-line" />
                <line x1="44" y1="117" x2="712" y2="117" class="grid-line" />
              </g>
              <!-- Chart bars -->
              <g class="bars">
                <rect x="56" y="18" width="8" height="84" rx="4" fill="#fff" /> <!-- Sunday 400 -->
                <rect x="157" y="6" width="8" height="96" rx="4" fill="#fff" /> <!-- Monday 500 -->
                <rect x="252" y="35" width="8" height="67" rx="4" fill="#fff" /> <!-- Tuesday 350 -->
                <rect x="361" y="55" width="8" height="47" rx="4" fill="#fff" /> <!-- Wednesday 250 -->
                <rect x="460" y="42" width="8" height="60" rx="4" fill="#fff" /> <!-- Thursday 200 -->
                <rect x="551" y="0" width="8" height="102" rx="4" fill="#fff" /> <!-- Friday 500 -->
                <rect x="657" y="76" width="8" height="26" rx="4" fill="#fff" /> <!-- Saturday 100 -->
              </g>
              <!-- X-axis labels -->
              <g class="x-labels">
                <text x="60" y="133" class="x-label">Sunday</text>
                <text x="159" y="133" class="x-label">Monday</text>
                <text x="258" y="133" class="x-label">Tuesday</text>
                <text x="367" y="133" class="x-label">Wednesday</text>
                <text x="466" y="133" class="x-label">Thursday</text>
                <text x="557" y="133" class="x-label">Friday</text>
                <text x="663" y="133" class="x-label">Saturday</text>
              </g>
            </svg>
          </div>
        </div>
        <div class="analytics-stat-card users-card">
          <div class="users-card-inner">
            <div class="users-card-header-row">
              <div class="users-card-title-group">
                <span class="users-card-icon material-symbols-rounded">group</span>
                <span class="users-card-title">Users</span>
              </div>
              <div class="users-card-percentage">
                <span class="users-card-arrow material-symbols-rounded">arrow_upward</span>
                <span class="users-card-percent-text">+5%</span>
              </div>
            </div>
            <div class="users-card-value">32,9984</div>
            <div class="users-card-desc">New Users</div>
            <div class="users-card-goal-row">
              <span class="users-card-goal">Goal: 40,000</span>
              <span class="users-card-goal-percent">82%</span>
            </div>
            <div class="users-card-progress-bar">
              <div class="users-card-progress" style="width: 82%"></div>
            </div>
          </div>
        </div>
        <div class="analytics-stat-card clicks-card">
          <div class="clicks-card-inner">
            <div class="clicks-card-header-row">
              <div class="clicks-card-title-group">
                <span class="clicks-card-icon material-symbols-rounded">arrow_selector_tool</span>
                <span class="clicks-card-title">Clicks</span>
              </div>
              <div class="clicks-card-percentage">
                <span class="clicks-card-arrow material-symbols-rounded">arrow_upward</span>
                <span class="clicks-card-percent-text">+5%</span>
              </div>
            </div>
            <div class="clicks-card-value">2,420,000</div>
            <div class="clicks-card-desc">Clicks Achieved</div>
            <div class="clicks-card-goal-row">
              <span class="clicks-card-goal">Goal: 2,000,000</span>
              <span class="clicks-card-goal-percent">100%</span>
            </div>
            <div class="clicks-card-progress-bar">
              <div class="clicks-card-progress" style="width: 100%"></div>
            </div>
            <div class="clicks-card-success-row">
              <span class="clicks-card-emoji">🎉</span>
              <span class="clicks-card-success-text">21% over target!</span>
            </div>
          </div>
        </div>
      </section>

      <section class="analytics-analytics-grid">
        <div class="line-graph-style analytics-graph-card">
          <div class="line-graph-header">
            <div class="line-graph-text">
              <div class="line-graph-title">Sales Overview</div>
              <div class="line-graph-subtitle">
                <span class="material-symbols-rounded line-graph-arrow">arrow_upward</span>
                +5 more than 2021
              </div>
            </div>
            <div class="line-graph-filter">
              <div class="line-graph-filter-input">
                <div class="line-graph-filter-content">
                  <span class="material-symbols-rounded line-graph-calendar">calendar_month</span>
                  <span class="line-graph-filter-text">Last 7 days</span>
                </div>
              </div>
            </div>
          </div>
          <div class="line-graph-chart">
            <svg width="100%" height="130" viewBox="0 0 736 130">
              <!-- Y-axis labels -->
              <g class="line-y-labels">
                <text x="8" y="20" class="line-y-label">500</text>
                <text x="8" y="43" class="line-y-label">400</text>
                <text x="8" y="66" class="line-y-label">300</text>
                <text x="8" y="89" class="line-y-label">200</text>
                <text x="8" y="112" class="line-y-label">100</text>
                <text x="8" y="135" class="line-y-label">0</text>
              </g>
              <!-- Grid lines -->
              <g class="line-grid-lines">
                <line x1="34" y1="20" x2="731" y2="20" stroke="#EBEFF2" stroke-width="1"/>
                <line x1="34" y1="43" x2="731" y2="43" stroke="#EBEFF2" stroke-width="1"/>
                <line x1="34" y1="66" x2="731" y2="66" stroke="#EBEFF2" stroke-width="1"/>
                <line x1="34" y1="89" x2="731" y2="89" stroke="#EBEFF2" stroke-width="1"/>
                <line x1="34" y1="112" x2="731" y2="112" stroke="#EBEFF2" stroke-width="1"/>
                <line x1="34" y1="135" x2="731" y2="135" stroke="#EBEFF2" stroke-width="1"/>
              </g>
              <!-- Teal line with gradient fill -->
              <defs>
                <linearGradient id="tealGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#4FD1C5;stop-opacity:0.54"/>
                  <stop offset="100%" style="stop-color:#4FD1C5;stop-opacity:0"/>
                </linearGradient>
                <linearGradient id="darkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#2B3748;stop-opacity:0.36"/>
                  <stop offset="100%" style="stop-color:#2B3748;stop-opacity:0"/>
                </linearGradient>
              </defs>
              <!-- Teal line area fill -->
              <path d="M 34 82 L 94 67 L 154 47 L 214 37 L 274 27 L 334 22 L 394 17 L 454 12 L 514 10 L 574 8 L 634 6 L 694 5 L 735 4 L 735 135 L 34 135 Z" fill="url(#tealGradient)"/>
              <!-- Teal line -->
              <path d="M 34 82 L 94 67 L 154 47 L 214 37 L 274 27 L 334 22 L 394 17 L 454 12 L 514 10 L 574 8 L 634 6 L 694 5 L 735 4" stroke="#4FD1C5" stroke-width="3" fill="none"/>
              <!-- Dark line area fill -->
              <path d="M 34 87 L 94 77 L 154 62 L 214 52 L 274 42 L 334 37 L 394 32 L 454 27 L 514 25 L 574 23 L 634 21 L 694 19 L 735 18 L 735 135 L 34 135 Z" fill="url(#darkGradient)"/>
              <!-- Dark line -->
              <path d="M 34 87 L 94 77 L 154 62 L 214 52 L 274 42 L 334 37 L 394 32 L 454 27 L 514 25 L 574 23 L 634 21 L 694 19 L 735 18" stroke="#2B3748" stroke-width="3" fill="none"/>
              <!-- X-axis labels -->
              <g class="line-x-labels">
                <text x="34" y="150" class="line-x-label">Jan</text>
                <text x="94" y="150" class="line-x-label">Feb</text>
                <text x="154" y="150" class="line-x-label">Mar</text>
                <text x="214" y="150" class="line-x-label">Apr</text>
                <text x="274" y="150" class="line-x-label">May</text>
                <text x="334" y="150" class="line-x-label">Jun</text>
                <text x="394" y="150" class="line-x-label">Jul</text>
                <text x="454" y="150" class="line-x-label">Aug</text>
                <text x="514" y="150" class="line-x-label">Sep</text>
                <text x="574" y="150" class="line-x-label">Oct</text>
                <text x="634" y="150" class="line-x-label">Nov</text>
                <text x="694" y="150" class="line-x-label">Dec</text>
              </g>
            </svg>
          </div>
        </div>
        <div class="analytics-stat-card sales-card">
          <div class="sales-card-inner">
            <div class="sales-card-header-row">
              <div class="sales-card-title-group">
                <span class="sales-card-icon material-symbols-rounded">bar_chart_4_bars</span>
                <span class="sales-card-title">Sales</span>
              </div>
              <div class="sales-card-percentage">
                <span class="sales-card-arrow material-symbols-rounded">arrow_upward</span>
                <span class="sales-card-percent-text">+5%</span>
              </div>
            </div>
            <div class="sales-card-value">2,400</div>
            <div class="sales-card-desc">Sales Achieved</div>
            <div class="sales-card-goal-row">
              <span class="sales-card-goal">Goal: 3,000</span>
              <span class="sales-card-goal-percent">80%</span>
            </div>
            <div class="sales-card-progress-bar">
              <div class="sales-card-progress" style="width: 80%"></div>
            </div>
          </div>
        </div>
        <div class="analytics-stat-card items-card">
          <div class="items-card-inner">
            <div class="items-card-header-row">
              <div class="items-card-title-group">
                <span class="items-card-icon material-symbols-rounded">package_2</span>
                <span class="items-card-title">Items</span>
              </div>
              <div class="items-card-percentage">
                <span class="items-card-arrow material-symbols-rounded">arrow_upward</span>
                <span class="items-card-percent-text">+5%</span>
              </div>
            </div>
            <div class="items-card-value">320</div>
            <div class="items-card-desc">Items Sold</div>
            <div class="items-card-goal-row">
              <span class="items-card-goal">Goal: 400</span>
              <span class="items-card-goal-percent">80%</span>
            </div>
            <div class="items-card-progress-bar">
              <div class="items-card-progress" style="width: 80%"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="dashboard-row dashboard-projects-orders">
        <div class="projects-card">
          <div class="projects-header">
            <div class="projects-text">
              <div class="projects-title">Projects</div>
              <div class="projects-subtitle">
                <span class="material-symbols-rounded projects-status-dot">check_circle</span>
                30 done <span class="projects-subdued">this month</span>
              </div>
            </div>
            <div class="projects-search-group">
              <div class="projects-search">
              <span class="material-symbols-rounded projects-search-icon">search</span>
                <input type="text" placeholder="Search" />
              </div>
              <div class="projects-filter-icon">
                <span class="material-symbols-rounded">filter_alt</span>
              </div>
            </div>
          </div>
          <div class="projects-table">
            <div class="projects-table-header">
              <div>Companies</div>
              <div>Members</div>
              <div>Budget</div>
              <div>Completion</div>
              <div></div>
            </div>
            <div class="projects-table-row">
              <div class="projects-company">
                <div class="projects-company-icon projects-icon-chakra">
                  <span class="material-symbols-rounded">code</span>
                </div>
                <span>Chakra Soft UI Version</span>
              </div>
              <div class="projects-members">
                <img src="/img/Image.png" class="projects-avatar"/>
                <img src="/img/Image.png" class="projects-avatar"/>
                <img src="/img/Image.png" class="projects-avatar"/>
                <img src="/img/Image.png" class="projects-avatar"/>
              </div>
              <div class="projects-budget">$14,000</div>
              <div class="projects-completion">
                <span class="projects-completion-text projects-blue">60%</span>
                <div class="projects-progress-bar"><div class="projects-progress projects-blue" style="width: 60%"></div></div>
              </div>
              <div class="projects-chevron"><span class="material-symbols-rounded">chevron_right</span></div>
            </div>
            <div class="projects-table-row">
              <div class="projects-company">
                <div class="projects-company-icon projects-icon-vandelay">
                  <span class="material-symbols-rounded">trending_up</span>
                </div>
                <span>Add Progress Track</span>
              </div>
              <div class="projects-members">
                <img src="/img/Image.png" class="projects-avatar"/>
                <img src="/img/Image.png" class="projects-avatar"/>
              </div>
              <div class="projects-budget">$3,000</div>
              <div class="projects-completion">
                <span class="projects-completion-text projects-red">10%</span>
                <div class="projects-progress-bar"><div class="projects-progress projects-red" style="width: 10%"></div></div>
              </div>
              <div class="projects-chevron"><span class="material-symbols-rounded">chevron_right</span></div>
            </div>
            <div class="projects-table-row">
              <div class="projects-company">
                <div class="projects-company-icon projects-icon-fix">
                  <span class="material-symbols-rounded">bug_report</span>
                </div>
                <span>Fix Platform Errors</span>
              </div>
              <div class="projects-members">
                <img src="/img/Image.png" class="projects-avatar"/>
              </div>
              <div class="projects-budget">-</div>
              <div class="projects-completion">
                <span class="projects-completion-text projects-teal">100%</span>
                <div class="projects-progress-bar"><div class="projects-progress projects-teal" style="width: 100%"></div></div>
              </div>
              <div class="projects-chevron"><span class="material-symbols-rounded">chevron_right</span></div>
            </div>
            <div class="projects-table-row">
              <div class="projects-company">
                <div class="projects-company-icon projects-icon-mobile">
                  <span class="material-symbols-rounded">smartphone</span>
                </div>
                <span>Launch our Mobile App</span>
              </div>
              <div class="projects-members">
                <img src="/img/Image.png" class="projects-avatar"/>
                <img src="/img/Image.png" class="projects-avatar"/>
                <img src="/img/Image.png" class="projects-avatar"/>
              </div>
              <div class="projects-budget">$32,000</div>
              <div class="projects-completion">
                <span class="projects-completion-text projects-teal">100%</span>
                <div class="projects-progress-bar"><div class="projects-progress projects-teal" style="width: 100%"></div></div>
              </div>
              <div class="projects-chevron"><span class="material-symbols-rounded">chevron_right</span></div>
            </div>
            <div class="projects-table-row">
              <div class="projects-company">
                <div class="projects-company-icon projects-icon-shop">
                  <span class="material-symbols-rounded">store</span>
                </div>
                <span>Redesign New Online Shop</span>
              </div>
              <div class="projects-members">
                <img src="/img/Image.png" class="projects-avatar"/>
              </div>
              <div class="projects-budget">$7,600</div>
              <div class="projects-completion">
                <span class="projects-completion-text projects-orange">40%</span>
                <div class="projects-progress-bar"><div class="projects-progress projects-orange" style="width: 40%"></div></div>
              </div>
              <div class="projects-chevron"><span class="material-symbols-rounded">chevron_right</span></div>
            </div>
            <div class="projects-table-row">
              <div class="projects-company">
                <div class="projects-company-icon projects-icon-figma">
                  <span class="material-symbols-rounded">design_services</span>
                </div>
                <span>Figma Redesign</span>
              </div>
              <div class="projects-members">
                <img src="/img/Image.png" class="projects-avatar"/>
                <img src="/img/Image.png" class="projects-avatar"/>
              </div>
              <div class="projects-budget">$9,500</div>
              <div class="projects-completion">
                <span class="projects-completion-text projects-purple">75%</span>
                <div class="projects-progress-bar"><div class="projects-progress projects-purple" style="width: 75%"></div></div>
              </div>
              <div class="projects-chevron"><span class="material-symbols-rounded">chevron_right</span></div>
            </div>
          </div>
        </div>
        <div class="orders-card">
          <div class="orders-header">
            <div class="orders-title">Order Overview</div>
            <div class="orders-subtitle">
              <span class="orders-green">
                <span class="material-symbols-rounded orders-arrow-up">arrow_upward</span>
                +30%
              </span>
              <span class="orders-subdued">this month</span>
            </div>
          </div>
          <div class="orders-list">
            <div class="orders-list-item">
              <span class="orders-list-icon material-symbols-rounded orders-icon-blue">edit</span>
              <div class="orders-list-details">
                <div class="orders-list-title">Design Changes</div>
                <div class="orders-list-date">22 DEC 7:20 PM</div>
              </div>
              <div class="orders-amount-badge-col">
                <div class="orders-list-amount">$2,400</div>
                <span class="orders-badge orders-badge-completed">Completed</span>
              </div>
              <span class="material-symbols-rounded orders-chevron">chevron_right</span>
            </div>
            <div class="orders-list-item">
              <span class="orders-list-icon material-symbols-rounded orders-icon-orange">html</span>
              <div class="orders-list-details">
                <div class="orders-list-title">New Order #4219423</div>
                <div class="orders-list-date">21 DEC 6:34 PM</div>
              </div>
              <div class="orders-amount-badge-col">
                <div class="orders-list-amount">$1,200</div>
                <span class="orders-badge orders-badge-processing">Processing</span>
              </div>
              <span class="material-symbols-rounded orders-chevron">chevron_right</span>
            </div>
            <div class="orders-list-item">
              <span class="orders-list-icon material-symbols-rounded orders-icon-teal">notifications</span>
              <div class="orders-list-details">
                <div class="orders-list-title">Server Payments</div>
                <div class="orders-list-date">21 DEC 9:28 PM</div>
              </div>
              <div class="orders-amount-badge-col">
                <div class="orders-list-amount">$3,600</div>
                <span class="orders-badge orders-badge-pending">Pending</span>
              </div>
              <span class="material-symbols-rounded orders-chevron">chevron_right</span>
            </div>
            <div class="orders-list-item">
              <span class="orders-list-icon material-symbols-rounded orders-icon-purple">credit_card</span>
              <div class="orders-list-details">
                <div class="orders-list-title">New Card Added</div>
                <div class="orders-list-date">20 DEC 5:32 PM</div>
              </div>
              <div class="orders-amount-badge-col">
                <div class="orders-list-amount">$2,000</div>
                <span class="orders-badge orders-badge-cancelled">Cancelled</span>
              </div>
              <span class="material-symbols-rounded orders-chevron">chevron_right</span>
            </div>
            <div class="orders-list-item">
              <span class="orders-list-icon material-symbols-rounded orders-icon-green">inventory_2</span>
              <div class="orders-list-details">
                <div class="orders-list-title">Unlock packages for development</div>
                <div class="orders-list-date">29 DEC 7:20 PM</div>
              </div>
              <div class="orders-amount-badge-col">
                <div class="orders-list-amount">$1,000</div>
                <span class="orders-badge orders-badge-completed">Completed</span>
              </div>
              <span class="material-symbols-rounded orders-chevron">chevron_right</span>
            </div>
            <div class="orders-list-item">
              <span class="orders-list-icon material-symbols-rounded orders-icon-blue">edit</span>
              <div class="orders-list-details">
                <div class="orders-list-title">New Order #9851258</div>
                <div class="orders-list-date">18 DEC 6:34 PM</div>
              </div>
              <div class="orders-amount-badge-col">
                <div class="orders-list-amount">$850</div>
                <span class="orders-badge orders-badge-processing">Processing</span>
              </div>
              <span class="material-symbols-rounded orders-chevron">chevron_right</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import DashboardCard from './components/DashboardCard.vue';
import { white, lightBlue2, primary, error, secondary } from '@/assets/colors.js';
import styles from './Dashboard.module.css';

const router = useRouter();
const showProfileDropdown = ref(false);
const profileBtn = ref(null);
const profileDropdown = ref(null);

function toggleProfileDropdown() {
  showProfileDropdown.value = !showProfileDropdown.value;
}

function logout() {
  showProfileDropdown.value = false;
  router.push('/signin');
}

function handleClickOutside(event) {
  if (
    showProfileDropdown.value &&
    profileDropdown.value &&
    !profileDropdown.value.contains(event.target) &&
    profileBtn.value &&
    !profileBtn.value.contains(event.target)
  ) {
    showProfileDropdown.value = false;
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<style scoped>
@import "./assets/colors.module.css";

.dashboard-container {
  display: flex;
  min-height: 100vh;
  background: var(--neutral-9);
  overflow-y: auto;
}
.sidebar {
  width: 300px;
  background: var(--white);
  border-right: 1px solid var(--neutral-7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  box-sizing: border-box;
}
.sidebar-brand {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 32px 46px 32px;
}
.sidebar-logo-text {
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  font-size: 1.05rem;
  color: var(--darkBlue1);
  text-transform: uppercase;
  line-height: 1.2;
}
.sidebar-main {
  flex: 1 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.sidebar-nav {
  width: 100%;
  padding: 0 32px;
}
.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  border-radius: 8px;
  padding: 0 16px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  color: var(--neutral-3);
  cursor: pointer;
  background: transparent;
  transition: background 0.2s, color 0.2s;
  position: relative;
  font-size: 1rem;
}
.nav-item.active {
  background: transparent;
}
.nav-icon-active {
  width: 44px;
  height: 44px;
  background: var(--primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-item.active .nav-icon-active .material-symbols-rounded {
  color: var(--white);
  font-size: 32px;
}
.nav-item.active .nav-text {
  color: var(--primary);
  font-weight: 600;
  font-family: 'Quicksand', sans-serif;
}
.nav-item .nav-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: var(--neutral-3);
  transition: color 0.2s;
}
.nav-item .nav-text {
  flex: 1;
  font-size: 1rem;
  color: inherit;
  transition: color 0.2s;
  font-weight: inherit;
}
.nav-item:hover {
  background: var(--neutral-9);
}
.sidebar-divider {
  width: 80%;
  margin: 32px auto 24px auto;
  border: none;
  border-top: 2px solid var(--lightBlue);
}
.main-content {
  flex: 1;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100vh;
  margin-top: 0;
  padding-top: 0;
}
.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background: var(--white);
  border-bottom: 1px solid var(--neutral-7);
  padding: 0 32px;
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  margin-top: 0;
  padding-top: 0.5rem;
}
.header-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
}
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #A5ABB3;
  font-weight: 500;
  margin-bottom: 14px;
}
.breadcrumb-link {
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  color: #A5ABB3; /* neutral-6 */
  font-size: 13px;
}
.breadcrumb-separator {
  font-size: 18px;
  color: #A5ABB3;
}
.breadcrumb-current {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  color: #394452; /* neutral-2 */
  font-size: 13px;
}
.header-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--neutral-3);
  margin: 0 0 6px 0;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 24px;
}
.header-divider {
  width: 2px;
  height: 36px;
  background: var(--neutral-7);
  border-radius: 100px;
  margin: 0 14px 0 24px;
}
.header-search {
  display: flex;
  align-items: center;
  background: var(--neutral-9);
  border: 1px solid var(--neutral-7);
  border-radius: 8px;
  padding: 0 16px;
  height: 36px;
  width: 264px;
  gap: 8px;
}
.header-search input {
  border: none;
  background: transparent;
  outline: none;
  font-size: 1rem;
  color: var(--neutral-1);
  width: 100%;
  height: 100%;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
}
.search-icon {
  color: var(--neutral-5);
  font-size: 20px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon-btn {
  width: 36px;
  height: 36px;
  background: var(--neutral-9);
  border: 1px solid var(--neutral-7);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 22px;
  color: var(--neutral-5);
  transition: background 0.2s, color 0.2s;
}
.header-icon-btn:hover {
  background: var(--neutral-8);
  color: var(--secondary);
}
.header-profile {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  height: 28px;
  border-radius: 8px;
  background: transparent;
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
  color: #394452;
  font-size: 1.3rem;
  cursor: pointer;
}
.profile-arrow {
  font-size: 28px;
  color: #858C94;
}
.stat-cards {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 0;
  margin-right: 0;
}
@media (max-width: 900px) {
  .stat-cards {
    gap: 16px;
    padding: 0;
    margin-left: 16px;
    margin-right: 16px;
  }
}
@media (max-width: 500px) {
  .stat-cards {
    flex-direction: column;
    gap: 12px;
    padding: 0;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 1rem;
  }
}
.promo-materials {
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin: 0 0 24px 0;
  height: 200px;
}
.promo-card {
  border-radius: 12px;
  height: 200px;
  min-width: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.promo-chakra {
  flex: 2 1 0;
  background: linear-gradient(90deg, #319795 0%, #4fd1c5 100%);
  color: #fff;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.promo-chakra-content {
  padding: 32px 0 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 2;
  gap: 14px;
  height: 100%;
}
.promo-chakra-text-container {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.promo-chakra-title {
  font-size: 1rem;
  color: #DAE0E3;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  margin-bottom: 4px;
}
.promo-chakra-headline {
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  margin-bottom: 8px;
  color: #fff;
}
.promo-chakra-desc {
  font-size: 1rem;
  color: #E6FFFA;
  margin-bottom: 0;
  font-family: 'Quicksand', sans-serif;
}
.promo-chakra-btn {
  background: rgba(255,255,255,0.18);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  transition: background 0.2s;
  box-shadow: 0 10px 35px 0 rgba(0,0,0,0.12);
  min-width: auto;
  width: auto;
}
.promo-chakra-btn:hover {
  background: rgba(255,255,255,0.28);
}
.promo-btn-icon {
  font-size: 20px;
}
.promo-chakra-logo {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  /* Replace with <img src> for real logo */
}
.chakra-logo-stack {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 12px;
  width: 100%;
  height: 100%;
  place-items: center;
  box-sizing: border-box;
  overflow: hidden;
}
.chakra-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.3;
  filter: brightness(0) invert(1);
}
.promo-rockets {
  flex: 1 1 0;
  background: none;
  color: #fff;
  padding: 0;
  position: relative;
  display: flex;
  align-items: flex-end;
}
.promo-rockets-bg {
  position: absolute;
  inset: 0;
  background-image: url('/img/Rockets.png');
  background-size: cover;
  background-position: center;
  z-index: 1;
}
.promo-rockets-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(24,28,38,0.35) 0%, rgba(24,28,38,0.65) 100%);
  z-index: 2;
}
.promo-rockets-content {
  position: relative;
  z-index: 3;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}
.promo-rockets-title {
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
}
.promo-rockets-desc {
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1.2rem;
  font-family: 'Quicksand', sans-serif;
}
.promo-rockets-btn {
  background: rgba(255,255,255,0.18);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  transition: background 0.2s;
  box-shadow: 0 10px 35px 0 rgba(0,0,0,0.12);
}
.promo-rockets-btn:hover {
  background: rgba(255,255,255,0.28);
}
@media (max-width: 1100px) {
  .promo-materials {
    flex-direction: column;
    height: auto;
    gap: 16px;
  }
  .promo-card {
    height: 180px;
  }
}
@media (max-width: 700px) {
  .promo-materials {
    margin: 24px 8px 0 8px;
    gap: 8px;
  }
  .promo-card {
    height: 140px;
  }
  .promo-chakra-content, .promo-rockets-content {
    padding: 16px;
  }
}
.analytics-analytics-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 32px;
  margin-bottom: 24px;
}
.analytics-analytics-grid:last-of-type {
  margin-bottom: 0;
}
.analytics-graph-card {
  grid-row: auto;
  grid-column: 1 / 2;
  height: 100%;
}
.analytics-stat-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.analytics-chart-card.dark {
  background: linear-gradient(135deg, #232B4D 0%, #1A223F 100%);
  color: #fff;
}
.analytics-chart-card.dark .analytics-card-title,
.analytics-chart-card.dark .analytics-card-badge,
.analytics-chart-card.dark .analytics-card-subtitle {
  color: #fff;
}
.analytics-chart-card.dark .analytics-card-badge {
  background: rgba(255,255,255,0.08);
}
.dark-labels span {
  color: #fff;
  opacity: 0.7;
}
.analytics-chart-card {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  position: relative;
  overflow: hidden;
}
.analytics-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.analytics-card-title {
  font-size: 1.3rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  color: #09101D;
}
.analytics-card-subtitle {
  font-size: 0.9rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  color: #A5ABB3;
}
.analytics-card-badge {
  background: #F4F6F9;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 0.9rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  color: #A5ABB3;
}
.analytics-chart {
  height: 100px;
  position: relative;
}
.analytics-chart-labels {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  font-size: 0.9rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  color: #A5ABB3;
}
.analytics-progress-bar {
  height: 8px;
  background: #F4F6F9;
  border-radius: 4px;
  overflow: hidden;
}
.analytics-progress {
  height: 100%;
  background: #4FD1C5;
}
.analytics-green-bg {
  background: #E6FFFA;
}
.analytics-orange-bg {
  background: #FFF3E0;
}
.analytics-blue-bg {
  background: #F0F5FF;
}
.analytics-purple-bg {
  background: #F9F5FF;
}
.analytics-green {
  color: #319795;
}
.active-users-card {
  background: #fff;
  border: 2px solid #E5EAF2;
  border-radius: 20px;
  padding: 32px 32px 24px 32px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 0;
  grid-column: 1 / span 3;
}
.active-users-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.active-users-title {
  font-family: 'Raleway', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #232B4D;
}
.active-users-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #F4F6F9;
  border: 2px solid #E5EAF2;
  border-radius: 16px;
  color: #A5ABB3;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px 24px;
}
.active-users-badge .material-symbols-rounded {
  font-size: 1.5rem;
  color: #A5ABB3;
}
.active-users-subtitle {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: 24px;
  margin-top: 0.5rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
}
.active-users-arrow {
  color: #38C976;
  font-size: 2rem;
  margin-right: 4px;
}
.active-users-green {
  color: #38C976;
  font-weight: 700;
  margin-right: 8px;
}
.active-users-gray {
  color: #A5ABB3;
  font-weight: 600;
}
.active-users-chart-container {
  background: linear-gradient(135deg, #232B4D 0%, #1A223F 100%);
  border-radius: 24px;
  padding: 0;
  margin-top: 8px;
  position: relative;
  min-height: 100px;
  overflow: auto;
}
.active-users-chart {
  width: 100%;
  height: 100px;
  display: block;
}
.y-label {
  fill: #fff;
  font-size: 0.8rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  opacity: 0.7;
  text-anchor: end;
}
.y-grid-line {
  stroke: #fff;
  stroke-dasharray: 6 6;
  opacity: 0.13;
}
.x-label {
  fill: #fff;
  font-size: 0.8rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  text-anchor: middle;
}
.bars rect {
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.10));
}
.active-users-graph-style .analytics-chart {
  background: linear-gradient(135deg, #232B4D 0%, #1A223F 100%);
  border-radius: 24px;
  padding: 0;
  margin-top: 0;
  position: relative;
}
.active-users-chart-container {
  background: linear-gradient(135deg, #232B4D 0%, #1A223F 100%);
  border-radius: 24px;
  padding: 0;
  margin-top: 8px;
  position: relative;
  min-height: 100px;
  overflow: auto;
}
.y-label {
  fill: #fff;
  font-size: 0.8rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  opacity: 0.7;
  text-anchor: end;
}
.y-grid-line {
  stroke: #fff;
  stroke-dasharray: 6 6;
  opacity: 0.13;
}
.x-label {
  fill: #fff;
  font-size: 0.8rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  text-anchor: middle;
}
.bars rect {
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.10));
}
.sales-overview-graph-style {
  background: #fff;
  border: 2px solid #E5EAF2;
  border-radius: 20px;
  padding: 32px 32px 24px 32px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 0;
  grid-column: 1 / span 3;
}
.sales-overview-chart-container {
  background: #fff;
  border-radius: 24px;
  padding: 0;
  margin-top: 8px;
  position: relative;
  min-height: 100px;
  overflow: auto;
}
.y-label.sales {
  fill: #A5ABB3;
  font-size: 0.8rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  opacity: 0.7;
  text-anchor: end;
}
.y-grid-line.sales {
  stroke: #A5ABB3;
  stroke-dasharray: 6 6;
  opacity: 0.13;
}
.x-label.sales {
  fill: #A5ABB3;
  font-size: 0.8rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  text-anchor: middle;
}
.analytics-3col-layout .analytics-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 24px;
}
.analytics-col-span-2 {
  grid-column: span 2;
}
.analytics-3col-2row-layout {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 32px 0 0 0;
}
.analytics-3col-2row-layout .analytics-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}
.analytics-2col-2x2card-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin: 0;
  align-items: stretch;
}
.analytics-2col-graphs {
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
}
.analytics-2col-cards {
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;
  justify-content: stretch;
}
.analytics-cards-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  height: 1fr;
}
.analytics-stat-card.users-card {
  background: #fff;
  border: 1px solid #DAE0E3;
  border-radius: 6px;
  padding: 24px 24px 16px 24px;
  min-width: 0;
  min-height: 232px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}
.users-card-inner {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}
.users-card-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.users-card-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
}
.users-card-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #4FD1C5;
  background: rgba(79, 209, 197, 0.08);
  box-shadow: 0 2px 10px 0 rgba(124, 141, 181, 0.12);
}
.users-card-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  color: #535C6A;
  font-weight: 600;
}
.users-card-percentage {
  display: flex;
  align-items: center;
  gap: 4px;
}
.users-card-arrow {
  font-size: 20px;
  color: #4FD1C5;
}
.users-card-percent-text {
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #4FD1C5;
}
.users-card-value {
  font-family: 'Quicksand', sans-serif;
  font-size: 2.1rem;
  font-weight: 800;
  color: #232B4D;
  margin-bottom: 0;
}
.users-card-desc {
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  color: #A5ABB3;
  font-weight: 500;
  margin-bottom: 0;
}
.users-card-goal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.users-card-goal {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: #6B7686;
  font-weight: 600;
}
.users-card-goal-percent {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: #4FD1C5;
  font-weight: 700;
}
.users-card-progress-bar {
  width: 100%;
  height: 8px;
  background: #DAE0E3;
  border-radius: 100px;
  margin-top: 8px;
  overflow: hidden;
}
.users-card-progress {
  height: 100%;
  background: #4FD1C5;
  border-radius: 100px;
}
.analytics-stat-card.clicks-card {
  background: #fff;
  border: 1px solid #DAE0E3;
  border-radius: 6px;
  padding: 24px 24px 16px 24px;
  min-width: 0;
  min-height: 232px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}
.clicks-card-inner {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}
.clicks-card-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.clicks-card-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
}
.clicks-card-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #FFA726;
  background: rgba(255, 167, 38, 0.08);
  box-shadow: 0 2px 10px 0 rgba(124, 141, 181, 0.12);
}
.clicks-card-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  color: #535C6A;
  font-weight: 600;
}
.clicks-card-percentage {
  display: flex;
  align-items: center;
  gap: 4px;
}
.clicks-card-arrow {
  font-size: 20px;
  color: #FFA726;
}
.clicks-card-percent-text {
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #FFA726;
}
.clicks-card-value {
  font-family: 'Quicksand', sans-serif;
  font-size: 2.1rem;
  font-weight: 800;
  color: #232B4D;
  margin-bottom: 0;
}
.clicks-card-desc {
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  color: #A5ABB3;
  font-weight: 500;
  margin-bottom: 0;
}
.clicks-card-goal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.clicks-card-goal {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: #6B7686;
  font-weight: 600;
}
.clicks-card-goal-percent {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: #FFA726;
  font-weight: 700;
}
.clicks-card-progress-bar {
  width: 100%;
  height: 8px;
  background: #DAE0E3;
  border-radius: 100px;
  margin-top: 8px;
  overflow: hidden;
}
.clicks-card-progress {
  height: 100%;
  background: #FFA726;
  border-radius: 100px;
}
.clicks-card-success-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}
.clicks-card-emoji {
  font-size: 1.1rem;
  color: #232B4D;
}
.clicks-card-success-text {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: #FFA726;
  font-weight: 700;
}
.analytics-stat-card.sales-card {
  background: #fff;
  border: 1px solid #DAE0E3;
  border-radius: 6px;
  padding: 24px 24px 16px 24px;
  min-width: 0;
  min-height: 232px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}
.sales-card-inner {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}
.sales-card-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.sales-card-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
}
.sales-card-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #2196F3;
  background: rgba(33, 150, 243, 0.08);
  box-shadow: 0 2px 10px 0 rgba(124, 141, 181, 0.12);
}
.sales-card-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  color: #535C6A;
  font-weight: 600;
}
.sales-card-percentage {
  display: flex;
  align-items: center;
  gap: 4px;
}
.sales-card-arrow {
  font-size: 20px;
  color: #2196F3;
}
.sales-card-percent-text {
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #2196F3;
}
.sales-card-value {
  font-family: 'Quicksand', sans-serif;
  font-size: 2.1rem;
  font-weight: 800;
  color: #232B4D;
  margin-bottom: 0;
}
.sales-card-desc {
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  color: #A5ABB3;
  font-weight: 500;
  margin-bottom: 0;
}
.sales-card-goal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.sales-card-goal {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: #6B7686;
  font-weight: 600;
}
.sales-card-goal-percent {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: #2196F3;
  font-weight: 700;
}
.sales-card-progress-bar {
  width: 100%;
  height: 8px;
  background: #DAE0E3;
  border-radius: 100px;
  margin-top: 8px;
  overflow: hidden;
}
.sales-card-progress {
  height: 100%;
  background: #2196F3;
  border-radius: 100px;
}
.analytics-stat-card.items-card {
  background: #fff;
  border: 1px solid #DAE0E3;
  border-radius: 6px;
  padding: 24px 24px 16px 24px;
  min-width: 0;
  min-height: 232px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}
.items-card-inner {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}
.items-card-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.items-card-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
}
.items-card-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #7852F3;
  background: rgba(120, 82, 243, 0.08);
  box-shadow: 0 2px 10px 0 rgba(124, 141, 181, 0.12);
}
.items-card-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  color: #535C6A;
  font-weight: 600;
}
.items-card-percentage {
  display: flex;
  align-items: center;
  gap: 4px;
}
.items-card-arrow {
  font-size: 20px;
  color: #7852F3;
}
.items-card-percent-text {
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #7852F3;
}
.items-card-value {
  font-family: 'Quicksand', sans-serif;
  font-size: 2.1rem;
  font-weight: 800;
  color: #232B4D;
  margin-bottom: 0;
}
.items-card-desc {
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  color: #A5ABB3;
  font-weight: 500;
  margin-bottom: 0;
}
.items-card-goal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.items-card-goal {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: #6B7686;
  font-weight: 600;
}
.items-card-goal-percent {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: #7852F3;
  font-weight: 700;
}
.items-card-progress-bar {
  width: 100%;
  height: 8px;
  background: #DAE0E3;
  border-radius: 100px;
  margin-top: 8px;
  overflow: hidden;
}
.items-card-progress {
  height: 100%;
  background: #7852F3;
  border-radius: 100px;
}
.bar-graph-style {
  background: #fff;
  border: 1px solid #DAE0E3;
  border-radius: 8px;
  padding: 15px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 232px;
}
.bar-graph-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  height: 49px;
}
.bar-graph-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}
.bar-graph-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #535C6A;
  line-height: 25px;
}
.bar-graph-subtitle {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Quicksand', sans-serif;
  font-size: 0.9rem;
  color: #38C976;
  font-weight: 500;
  line-height: 20px;
}
.bar-graph-arrow {
  font-size: 20px;
  color: #38C976;
}
.bar-graph-filter {
  display: flex;
  align-items: center;
}
.filter-button {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #F4F6F9;
  border: 1px solid #DAE0E3;
  border-radius: 8px;
  padding: 8px 16px;
  height: 36px;
  cursor: pointer;
}
.filter-icon {
  font-size: 18px;
  color: #6B7686;
}
.filter-text {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.9rem;
  color: #6B7686;
  font-weight: 500;
}
.bar-graph-chart {
  flex: 1;
  background: linear-gradient(135deg, #313B60 0%, #151A28 100%);
  border-radius: 12px;
  padding: 10px;
  position: relative;
  min-height: 140px;
}
.y-label {
  fill: #DAE0E3;
  font-size: 0.8rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  text-anchor: end;
}
.grid-line {
  stroke: #394452;
  stroke-opacity: 0.3;
  stroke-width: 1;
}
.x-label {
  fill: #DAE0E3;
  font-size: 0.8rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  text-anchor: middle;
}
.bars rect {
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.10));
}
.line-graph-style {
  background: #fff;
  border: 1px solid #DAE0E3;
  border-radius: 8px;
  padding: 15px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 233px;
}
.line-graph-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  height: 49px;
}
.line-graph-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}
.line-graph-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #535C6A;
  line-height: 25px;
}
.line-graph-subtitle {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Quicksand', sans-serif;
  font-size: 0.9rem;
  color: #38C976;
  font-weight: 500;
  line-height: 20px;
}
.line-graph-arrow {
  font-size: 20px;
  color: #38C976;
}
.line-graph-filter {
  display: flex;
  align-items: center;
}
.line-graph-filter-input {
  background: #F4F6F9;
  border: 1px solid #DAE0E3;
  border-radius: 8px;
  height: 36px;
  display: flex;
  align-items: center;
}
.line-graph-filter-content {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  height: 100%;
}
.line-graph-calendar {
  font-size: 18px;
  color: #6B7686;
}
.line-graph-filter-text {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.9rem;
  color: #6B7686;
  font-weight: 500;
}
.line-graph-chart {
  flex: 1;
  position: relative;
  min-height: 130px;
}
.line-y-label {
  fill: #DAE0E3;
  font-size: 0.8rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  text-anchor: end;
}
.line-grid-lines line {
  stroke: #EBEFF2;
  stroke-width: 1;
}
.line-x-label {
  fill: #DAE0E3;
  font-size: 0.8rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  text-anchor: middle;
}
.dashboard-row.dashboard-projects-orders {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}
.projects-card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #DAE0E3;
  padding: 24px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.projects-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 49px;
  gap: 24px;
}
.projects-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}
.projects-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #535C6A;
  line-height: 25px;
  margin-bottom: 4px;
}
.projects-subtitle {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.9rem;
  color: #858C94;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.projects-status-dot {
  color: #4FD1C5;
  font-size: 20px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.projects-subdued {
  color: #858C94;
  font-size: 0.9rem;
}
.projects-search-group {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 49px;
}
.projects-search {
  background: #F4F6F9;
  border: 1px solid #DAE0E3;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 263px;
  height: 36px;
  padding: 0 16px;
}
.projects-search input {
  border: none;
  background: transparent;
  outline: none;
  font-size: 0.9rem;
  color: #858C94;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  width: 100%;
  height: 100%;
}
.projects-search-icon {
  color: #858C94;
  font-size: 18px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.projects-filter-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #F4F6F9;
  border: 1px solid #DAE0E3;
  border-radius: 8px;
  padding: 8px;
}
.projects-filter-icon .material-symbols-rounded {
  color: #858C94;
  font-size: 20px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.projects-table {
  background: #F8F9FA;
  border-radius: 8px;
  margin-top: 12px;
  padding: 16px 0;
  overflow-x: auto;
}
.projects-table-header, .projects-table-row {
  display: grid;
  grid-template-columns: 2.5fr 1.2fr 1fr 1.5fr 0.5fr;
  align-items: center;
  padding: 0 24px;
  min-height: 56px;
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
}
.projects-table-header {
  color: #A5ABB3;
  font-weight: 700;
  border-bottom: 1px solid #E5EAF2;
  background: #F8F9FA;
  padding-bottom: 12px;
  margin-bottom: 8px;
}
.projects-table-row {
  background: #fff;
  border-bottom: 1px solid #F0F2F5;
  font-weight: 500;
  margin-bottom: 4px;
}
.projects-table-row:last-child {
  border-bottom: none;
  margin-bottom: 0;
}
.projects-company {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  color: #232B4D;
}
.projects-company-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
}
.projects-icon-chakra {
  background: linear-gradient(135deg, #4FD1C5 0%, #319795 100%);
}
.projects-icon-vandelay {
  background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
}
.projects-icon-fix {
  background: linear-gradient(135deg, #FFA726 0%, #FF9800 100%);
}
.projects-icon-mobile {
  background: linear-gradient(135deg, #7852F3 0%, #6A4C93 100%);
}
.projects-icon-shop {
  background: linear-gradient(135deg, #F44336 0%, #D32F2F 100%);
}
.projects-logo {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  object-fit: contain;
  background: #fff;
  border: 1px solid #E5EAF2;
}
.projects-members {
  display: flex;
  align-items: center;
  gap: -8px;
}
.projects-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  object-fit: cover;
  margin-left: -8px;
  background: #E5EAF2;
}
.projects-avatar:first-child {
  margin-left: 0;
}
.projects-budget {
  font-weight: 700;
  color: #232B4D;
}
.projects-completion {
  display: flex;
  align-items: center;
  gap: 8px;
}
.projects-completion-text {
  font-weight: 700;
  font-size: 1rem;
}
.projects-blue {
  color: #2196F3;
}
.projects-red {
  color: #F44336;
}
.projects-teal {
  color: #4FD1C5;
}
.projects-orange {
  color: #FFA726;
}
.projects-progress-bar {
  width: 100px;
  height: 8px;
  background: #E5EAF2;
  border-radius: 100px;
  overflow: hidden;
}
.projects-progress {
  height: 100%;
  border-radius: 100px;
}
.projects-progress.projects-blue {
  background: #2196F3;
}
.projects-progress.projects-red {
  background: #F44336;
}
.projects-progress.projects-teal {
  background: #4FD1C5;
}
.projects-progress.projects-orange {
  background: #FFA726;
}
.projects-chevron {
  color: #A5ABB3;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.orders-card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #DAE0E3;
  padding: 24px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.orders-header {
  margin-bottom: 16px;
}
.orders-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #535C6A;
}
.orders-subtitle {
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  color: #A5ABB3;
  font-weight: 500;
  margin-top: 2px;
}
.orders-green {
  color: #38C976;
  font-weight: 700;
}
.orders-subdued {
  color: #A5ABB3;
}
.orders-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.orders-list-item {
  display: flex;
  align-items: center;
  background: #F8F9FA;
  border-radius: 8px;
  padding: 10px 12px;
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  color: #232B4D;
  gap: 12px;
}
.orders-list-icon {
  font-size: 28px;
  color: #A5ABB3;
  margin-right: 8px;
}
.orders-list-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.orders-list-title {
  font-weight: 700;
  color: #232B4D;
}
.orders-list-date {
  font-size: 0.95rem;
  color: #A5ABB3;
}
.orders-list-amount {
  font-weight: 700;
  color: #232B4D;
  margin-right: 8px;
  align-self: center;
  line-height: 1.2;
}
.orders-badge {
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: 8px;
  padding: 4px 12px;
  margin-right: 8px;
  display: inline-block;
  align-self: center;
  line-height: 1.2;
}
.orders-badge-completed {
  background: #E6FFFA;
  color: #38C976;
}
.orders-badge-processing {
  background: #E3F2FD;
  color: #2196F3;
}
.orders-badge-pending {
  background: #FFF3E0;
  color: #FFA726;
}
.orders-badge-cancelled {
  background: #FFEBEE;
  color: #F44336;
}
.orders-chevron {
  color: #A5ABB3;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.orders-amount-badge-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.orders-list-amount {
  margin-right: 0;
  margin-bottom: 6px;
}
.orders-icon-blue { color: #2196F3; }
.orders-icon-orange { color: #FFA726; }
.orders-icon-teal { color: #4FD1C5; }
.orders-icon-purple { color: #7852F3; }
.orders-icon-green { color: #38C976; }
.orders-icon-html { color: #FF5722; }
.orders-icon-shopping_cart { color: #2196F3; }
.orders-icon-gold { color: #FFB300; }
.orders-icon-dropbox { color: #0061FF; }
.orders-icon-xd { color: #FF2BC2; }
.orders-arrow-up {
  font-size: 20px;
  vertical-align: middle;
  margin-right: 2px;
}
.projects-icon-figma {
  background: linear-gradient(135deg, #A259FF 0%, #F24E1E 100%);
}
.projects-progress.projects-purple {
  background: #A259FF;
}
.projects-completion-text.projects-purple {
  color: #A259FF;
}
.help-card {
  background: linear-gradient(135deg, #4fd1c5 0%, #81e6d9 100%);
  border-radius: 24px;
  padding: 24px 16px;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 16px;
}
.help-icon {
  background: #fff;
  color: #319795;
  border-radius: 11px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
.help-title {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
}
.help-desc {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: #e6fffa;
}
.help-btn {
  margin-top: 0.5rem;
  background: #fff;
  color: #6D7580;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 10px 35px 0 rgba(0,0,0,0.12);
  min-width: auto;
  width: auto;
}
.sidebar-help {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 45rem;
}
.help-text-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  width: 100%;
}
.sidebar-logo {
  width: 240px;
  height: auto;
  display: block;
}
.nav-icon-inactive {
  width: 44px;
  height: 44px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-item:not(.active) .nav-icon-inactive .material-symbols-rounded {
  color: #535C6A;
  font-size: 32px;
}
.nav-item:not(.active) .nav-text {
  color: #535C6A;
  font-weight: 500;
  font-family: 'Quicksand', sans-serif;
}
.nav-item:not(.active):hover .nav-icon-inactive {
  background: #F4F6F9;
  border-radius: 12px;
}
.nav-item:not(.active):hover .nav-icon-inactive .material-symbols-rounded,
.nav-item:not(.active):hover .nav-text {
  color: #319795;
}
.profile-dropdown {
  position: absolute;
  top: 110%;
  right: 0;
  background: #fff;
  border: 1px solid #DADEE3;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  min-width: 140px;
  z-index: 200;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.profile-dropdown-item {
  background: none;
  border: none;
  text-align: left;
  padding: 12px 20px;
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  color: #394452;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.profile-dropdown-item:hover {
  background: #F4F6F9;
  color: #319795;
}
</style>

<style>
html, body {
  margin: 0;
  padding: 0;
}
.dashboard-container {
  margin-top: 0;
  padding-top: 0;
}
</style> 