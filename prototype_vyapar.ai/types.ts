// types.ts

export enum Page {
  Home = 'Home',
  CreateContent = 'CreateContent',
  CommandCenter = 'CommandCenter',
  Onboarding = 'Onboarding',
  Help = 'Help',
}

export enum ContentType {
  POST = 'Social Post',
  REEL = 'Video Reel Script',
  POSTER = 'Ad Poster',
}

export interface FormData {
  contentType: ContentType;
  productName: string;
  productDescription: string;
  targetAudience: string;
  brandVoice: string;
  specialInstructions?: string;
}

// --- Generated Content Interfaces ---

export interface GeneratedCaption {
  platform: string;
  caption: string;
}

export interface GeneratedVideoScript {
  title: string;
  hook: string;
  scenes: string[];
  cta: string;
}

export interface Source {
  uri: string;
  title: string;
}

// This is the flexible container for whatever content is generated
export interface GeneratedContentData {
  contentType: ContentType;
  captions?: GeneratedCaption[];
  videoScript?: GeneratedVideoScript;
  posterIdeas?: string[];
  sources?: Source[];
}
