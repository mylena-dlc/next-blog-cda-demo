import { format } from "date-fns";

export function formatDate(date: Date): string {
    // return format(new Date(date), "MMMM do, yyyy HH:mm") ?? "Date not available";
    return new Date(date).toLocaleDateString('fr-FR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric'
      }) ?? "Date not available";
      
}


// import clsx, { ClassValue } from "clsx";
// import { format } from "date-fns";
// import { twMerge } from "tailwind-merge";

// export function formatDate(date: Date): string {
//     return format(new Date(date), "MMMM do, yyyy HH:mm") ?? "Date not available";
// }

// export function cn(...inputs: ClassValue[]) {
//     return twMerge(clsx(inputs))
// }

// export const slugify = (str: string) => {
//     return str.toLowerCase().trim().replace(/[\s\W-]+/g, "-").replace(/^-+|-+$/g, "");
// }