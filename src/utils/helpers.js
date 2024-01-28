export function DateFormat(str){
    return new Intl.DateTimeFormat("en",{
        year:"numeric",
        month:"short",
        day:"2-digit",
        hour:"2-digit",
        minute:"2-digit",
    }).format(new Date(str))
}