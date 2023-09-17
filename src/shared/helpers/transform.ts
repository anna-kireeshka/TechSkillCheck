export const getUrlId = (url: string) => {
    const pathname = url.split("/");
    return Number(pathname[pathname.length - 1]);
}