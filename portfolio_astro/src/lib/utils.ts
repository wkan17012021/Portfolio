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


export function heroImgRandomiser(): string | undefined {
  const globResult = import.meta.glob("../assets/hero-images/*", {
    query: "?url",
    import: "default",
    eager: true,
  });

  const images = Object.values(globResult).filter(
      (img): img is string => typeof img === "string" && !img.endsWith(".DS_Store")
  );

  if (images.length === 0) {
    console.warn("No hero images found");
    return undefined;
  }

  const randomIndex = Math.floor(Math.random() * images.length);
  console.log(images[randomIndex]);
  return images[randomIndex];
}
