<template>
  <div :class="styles['dashboard-card-root']">
    <div :class="styles['dashboard-card-top']">
      <div :class="styles['dashboard-card-icon']">
        <span class="material-symbols-rounded" :style="{ color: iconColor }">{{ icon }}</span>
      </div>
      <div :class="styles['dashboard-card-title']">{{ title }}</div>
    </div>
    <div :class="styles['dashboard-card-value-row']">
      <div :class="styles['dashboard-card-value']">{{ value }}</div>
      <div :class="styles['dashboard-card-trend-row']">
        <span
          class="material-symbols-rounded"
          :class="[styles['dashboard-card-trend-icon'], trendType === 'up' ? styles['trend-up'] : styles['trend-down']]"
        >
          arrow_upward
        </span>
        <span
          :class="styles['dashboard-card-trend-text']"
        >
          {{ trend }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { primary, black, error } from '@/assets/colors.js';
import styles from './DashboardCard.module.css';
const props = defineProps({
  icon: String, // Material Symbol name
  iconColor: {
    type: String,
    default: primary,
  },
  title: String,
  value: String,
  trend: String, // e.g. '+55% this week'
  trendType: {
    type: String,
    default: 'up', // 'up' or 'down'
  },
});
</script>

<style scoped>
@import "../assets/colors.module.css";
.dashboard-card-root {
  /* width: 373px; */
  /* height: 104px; */
  flex: 1 1 0;
  /* max-width: 400px; */
  min-width: 0;
  background: var(--white);
  border: 1px solid var(--neutral-7);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  box-sizing: border-box;
  gap: 8px;
}
.dashboard-card-top {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 16px;
}
.dashboard-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px 0 rgba(124, 141, 181, 0.12);
  background: rgba(79, 209, 197, 0.0); /* transparent for now */
  margin-right: 4px;
}
.dashboard-card-icon .material-symbols-rounded {
  font-size: 32px;
}
.dashboard-card-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  color: var(--neutral-3);
  font-weight: 600;
  margin-left: 8px;
}
.dashboard-card-value-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 16px;
  gap: 24px;
}
.dashboard-card-value {
  font-family: 'Quicksand', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--black);
}
.dashboard-card-trend-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 0;
}
.dashboard-card-trend-icon {
  font-size: 28px;
  vertical-align: middle;
  margin-right: 2px;
}
.trend-up {
  color: var(--primary);
}
.trend-down {
  color: var(--error);
  transform: rotate(180deg);
}
.dashboard-card-trend-text {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--primary);
}
.trend-down ~ .dashboard-card-trend-text {
  color: var(--error);
}
@media (max-width: 900px) {
  .dashboard-card-root {
    max-width: 100%;
    min-width: 0;
  }
}
@media (max-width: 500px) {
  .dashboard-card-root {
    width: 100% !important;
    max-width: 100%;
    min-width: 0;
    padding: 0 8px;
    height: auto;
  }
  .dashboard-card-title {
    font-size: 0.95rem;
  }
  .dashboard-card-value {
    font-size: 1.5rem;
  }
  .dashboard-card-trend-text {
    font-size: 1rem;
  }
  .dashboard-card-icon {
    width: 36px;
    height: 36px;
  }
  .dashboard-card-icon .material-symbols-rounded {
    font-size: 24px;
  }
  .dashboard-card-value-row {
    gap: 12px;
    margin-top: 10px;
  }
}
</style> 