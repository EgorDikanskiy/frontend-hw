export const updateQueryParams = (navigate: Function, params: Record<string, string | number | null | number[]>) => {
    const searchParams = new URLSearchParams(window.location.search);
    
    Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== null) {
            searchParams.set(key, value.toString());
        } else {
            searchParams.delete(key);
        }
    });
    navigate(`?${searchParams.toString()}`, { replace: true });
};
