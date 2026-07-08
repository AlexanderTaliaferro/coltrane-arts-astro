// Single source of truth for events. The homepage Events section shows the
// `featured` entry; the /past-events page lists every entry, newest first.

export interface EventVideo {
  provider: "youtube" | "vimeo";
  id: string; // e.g. "CjNrckRhmlY"
  title?: string; // accessible label / caption
  poster?: string; // optional for YouTube (auto-thumb); REQUIRED for Vimeo
}

// A non-embeddable media destination (e.g. an iCloud shared album) shown as a
// "watch" link rather than an inline player.
export interface MediaLink {
  url: string;
  label?: string;
}

export interface SiteEvent {
  slug: string;
  title: string;
  subtitle?: string;
  date: string; // display form, e.g. "Saturday, June 6, 2026"
  dateISO: string; // sortable, e.g. "2026-06-06"
  time?: string; // e.g. "5 – 7 p.m."
  venue?: string;
  address?: string;
  description: string; // short summary
  ticketUrl?: string; // tickets (shown only while the event is upcoming)
  infoUrl?: string; // external "more info" link
  featured?: boolean; // the event shown in the homepage Events section
  videos: EventVideo[];
  mediaLink?: MediaLink; // fallback when there's no embeddable video
}

export const events: SiteEvent[] = [
  {
    slug: "ascension-day-2026",
    title: "Ascension Day Celebration",
    subtitle: "59th Ascension Day of Saint John Coltrane",
    date: "Wednesday, July 15, 2026",
    dateISO: "2026-07-15",
    time: "7 – 9 p.m. (doors 6:30 p.m.)",
    venue: "Grace Cathedral",
    address: "1100 California Street, San Francisco, CA 94108",
    ticketUrl:
      "https://www.eventbrite.com/e/ascension-day-celebration-tickets-1992867009873?aff=oddtdtcreator",
    description:
      "Something extraordinary is happening at Grace Cathedral. Join us as we celebrate the 59th Ascension Day of Saint John Coltrane with soul-stirring music, sacred jazz, powerful worship, and a spirit you have to experience to believe. Come catch the vibration. All are welcome!",
    featured: true,
    videos: [],
  },

  {
    slug: "a-love-supreme-di-rosa-2026",
    title: "A Love Supreme",
    subtitle: "Fundraiser for Coltrane Arts + di Rosa",
    date: "Saturday, June 6, 2026",
    dateISO: "2026-06-06",
    time: "5 – 7 p.m.",
    venue: "di Rosa SF",
    address: "1150 25th Street, San Francisco, CA",
    ticketUrl:
      "https://dirosa.my.salesforce-sites.com/ticket#/events/a0SVT00000EcmMv2AJ",
    description:
      "Contemporary sound and movement performance in honor of John Coltrane's centennial birthday. Selections from 'A Love Supreme' performed by Archbishop Franzo Wayne King, Mother Marina King, Archbishop Wanika King-Stephens, and Manny Berry on the piano.",
    videos: [
      {
        provider: "youtube",
        id: "NjKhY6PAL1E",
        title: "A Love Supreme at di Rosa",
      },
    ],
  },

  {
    slug: "john-coltrane-100-city-lights-2026",
    title: "John Coltrane 100",
    subtitle: "Emory Douglas in conversation, at City Lights",
    date: "Wednesday, April 15, 2026",
    dateISO: "2026-04-15",
    venue: "City Lights Bookstore",
    address: "San Francisco, CA",
    infoUrl:
      "https://citylights.com/events/john-coltrane-100-emory-douglas-with-archbishop-franzo-w-w-king-d-d/",
    description:
      "A special evening at City Lights Bookstore marking the centennial of John Coltrane: artist Emory Douglas in conversation with Archbishop Franzo W. King, D.D., moderated by Dr. Nicholas Baham III.",
    videos: [
      {
        provider: "youtube",
        id: "CjNrckRhmlY",
        title:
          "Emory Douglas in conversation with Archbishop Franzo W. King, D.D.",
        poster: "/images/cityLights.jpg",
      },
    ],
  },

  {
    slug: "garden-party-2026",
    title: "Garden Party",
    subtitle: "Coltrane Arts SF",
    date: "Saturday, January 24, 2026",
    dateISO: "2026-01-24",
    venue: "San Francisco, CA",
    description:
      "Coltrane Arts SF at the Garden Party — an afternoon of music and the spoken word in San Francisco, featuring a reading by San Francisco Poet Laureate Tongo Eisen-Martin.",
    videos: [
      {
        provider: "youtube",
        id: "WEOnZDW5y8Y",
        title: "Tongo Eisen-Martin at the Garden Party",
      },
    ],
  },
];

// Featured event for the homepage Events section.
export const featuredEvent = events.find((e) => e.featured);

// Every event, newest first — for the /past-events timeline.
export const pastEvents = [...events].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO)
);
