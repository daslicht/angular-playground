import { VimeoPicture } from './vimeo-item/vimeo-picture';
import { VimeoFile } from './vimeo-item/vimeo-file';

export interface VimeoItem {
    description: string;
    files: Array<VimeoFile>;
    link: string;
    name: string;
    pictures: Array<VimeoPicture>;
    uri: string;
    response?;
}
