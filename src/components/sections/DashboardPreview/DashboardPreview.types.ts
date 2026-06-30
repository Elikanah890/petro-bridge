export type ShipmentStatus = 'active' | 'delivered' | 'scheduled';

export interface DashboardShipment {
  id: string;
  product: string;
  volume: string;
  origin: string;
  destination: string;
  carrier: string;
  eta: string;
  progress: number;
  status: ShipmentStatus;
}

export type TimelineState = 'done' | 'active' | 'pending';

export interface TimelineStage {
  label: string;
  time: string;
  state: TimelineState;
}

export interface DashboardPreviewProps {
  className?: string;
}

export interface ShipmentCardProps {
  shipment: DashboardShipment;
  active?: boolean;
  className?: string;
}

export interface StatusTimelineProps {
  stages: TimelineStage[];
  className?: string;
}

export interface MapPlaceholderProps {
  origin?: string;
  destination?: string;
  className?: string;
}
