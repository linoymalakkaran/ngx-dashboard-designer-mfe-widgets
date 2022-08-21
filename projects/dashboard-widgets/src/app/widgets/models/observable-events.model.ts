export interface ObservableEventsModel {
  eventsType: MfeEventsTypes;
  data?: any;
}

export enum MfeEventsTypes {
  LOAD_WIDGET = 'LOAD_WIDGET',
  GENERIC = 'GENERIC',
}
