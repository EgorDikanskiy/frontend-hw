export function filterUrlImage(str: string | undefined) {
    if (str?.slice(-5) == '.jpeg') {
        return str
    }
    return 'https://my.mhaus.org/global_graphics/default-store-350x350.jpg';
}