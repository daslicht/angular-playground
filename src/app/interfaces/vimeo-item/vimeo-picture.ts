/**
 * Vimeo Video Picture Size
 */
export interface Size {
    height: number;
    link: string;
    link_with_play_button:string;
    width: number;
}


/**
 * Vimeo Video Picture
 */
export interface VimeoPicture {
    active: boolean;
    resource_key: string;
    sizes: Array<Size>;
    type: string;
    uri: string;
}