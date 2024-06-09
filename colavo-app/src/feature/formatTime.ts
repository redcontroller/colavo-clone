export default function formatTime(date:Date, local:string='ko-KR') {
    const options:Record<string, string|boolean> = {
        weekday: 'long', // 금요일
        year: 'numeric', // 2024
        month: 'long', // 6월
        day: 'numeric', // 7일
        hour: 'numeric', // 오후 4
        minute: 'numeric', //35
        hour12: true, // 12시간(true) 또는 24시간(false) 형식
    };
    return date.toLocaleString(local, options);
}