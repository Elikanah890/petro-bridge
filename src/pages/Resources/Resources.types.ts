export interface ResourcesPageProps {}

export interface ResourceFilter {
  id: string;
  label: string;
  type?: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileSize: string;
  fileType: string;
  downloadUrl: string;
}
