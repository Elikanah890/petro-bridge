export interface ServicesPageProps {}

export interface ServiceTab {
  id: string;
  label: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  values: Record<string, string | boolean>;
}
