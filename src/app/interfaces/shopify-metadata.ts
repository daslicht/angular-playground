/**
 *
 */
export interface Metafield {
  description?: string;
  id?: number;
  key?: string;
  namespace?: string;
  owner_id?: number;
  owner_resource?: string;
  updated_at?: string;
  value?: string;
  value_type?: string;
}

/**
 *
 */
export interface MetafieldsObject {
  mp4_url?: Metafield;
  ogv_url?: Metafield;
  webm_url?: Metafield;
  preview_url?: Metafield;
}