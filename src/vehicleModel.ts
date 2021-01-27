export interface VehicleObject {
  _attributes: any,
  DamageTech: any,
  Physics: any,
  VisorElement: any,
  Damages: any,
  Cameras: any,
  Pipes: any,
  Parts: any,
  Helpers: any,
  MovementParams: any,
  Particles: any,
  Modifications: any
}

export interface _Attributes {
  name: string,
  displayname: string,
  subType: string,
  size: string,
  requiredItemTags: string,
  itemPortTags: string,
  HudPaletteScheme: string,
  landingOffset: string
}

export interface Parts {
  
}
// export interface RamlObject {
//   resources: Resource[];
// }

// export interface Resource {
//   parentUrl: string;
//   relativeUri: string;
//   methods: Method[];
//   resources: Route[]
// }

// export interface Route {
//   relativeUri: string;
//   parentUrl: string;
//   methods: Method[];
// }

// export interface Method {
//   method: "get" | "put" | "post" | "delete" | "options";
//   body: Body[];
//   responses: Response[];
// }

// export interface Body {
//   properties: Parameter[];
// }

// export interface Parameter {
//   name: string;
//   type: string;
//   description: string;
// }

// export interface Response {
//   code: string;
//   description: string;
// }