import { BUSINESS_HOURS } from '../data/businessData';
import { DayOfWeek, DayHours } from '../types';

export interface BusinessStatusResult {
  currentDay: DayOfWeek;
  todayHours: DayHours;
  isOpenNow: boolean;
  statusMessage: string;
  currentTimeFormatted: string;
}

/**
 * Evaluates operational schedule against Georgia / Eastern Time.
 * Mon - Sun: 9:00 AM – 6:00 PM.
 */
export function getBusinessStatus(): BusinessStatusResult {
  try {
    const now = new Date();

    const etFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    const parts = etFormatter.formatToParts(now);
    let weekdayStr = 'Monday';
    let hour = 12;
    let minute = 0;

    for (const p of parts) {
      if (p.type === 'weekday') weekdayStr = p.value;
      if (p.type === 'hour') hour = parseInt(p.value, 10);
      if (p.type === 'minute') minute = parseInt(p.value, 10);
    }

    const currentDay = weekdayStr as DayOfWeek;
    const todayHours = BUSINESS_HOURS.find((h) => h.day === currentDay) || BUSINESS_HOURS[0];

    const decimalTime = hour + minute / 60;
    const isOpenNow = decimalTime >= 9 && decimalTime < 18;

    const displayFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    const currentTimeFormatted = displayFormatter.format(now) + ' ET';

    let statusMessage = '';
    if (isOpenNow) {
      statusMessage = 'Open today until 6:00 PM';
    } else if (decimalTime < 9) {
      statusMessage = 'Opens today at 9:00 AM';
    } else {
      statusMessage = 'Closed for the evening • Opens tomorrow at 9:00 AM';
    }

    return {
      currentDay,
      todayHours,
      isOpenNow,
      statusMessage,
      currentTimeFormatted,
    };
  } catch {
    return {
      currentDay: 'Monday',
      todayHours: BUSINESS_HOURS[0],
      isOpenNow: false,
      statusMessage: 'Posted Hours: Monday – Sunday 9:00 AM – 6:00 PM',
      currentTimeFormatted: 'Lithonia, GA',
    };
  }
}
