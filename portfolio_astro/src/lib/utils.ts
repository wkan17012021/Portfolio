import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth}${startYear} - ${endMonth}${endYear}`;
}


export function heroImgRandomiser() {
  // Astro's import.meta.glob only works in .astro/.mdx/.ts server-side files
  // This function should be called server-side only
  const globResult = import.meta.glob("/hero-images/*", { as: "url", eager: true });
  const images = Object.values(globResult).filter((img) => {
    // Exclude system files or folders (e.g. .DS_Store)
    return typeof img === "string" && !img.endsWith(".DS_Store");
  });
  if (images.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}