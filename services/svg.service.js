const KeepSvgs = {
    lightBolb: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>`,
    bell: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"></path></svg>`,
    tag: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></svg>`,
    pencil: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path></svg>`,
    archive: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path></svg>`,
    trash: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>`,
    bars: `<svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>`,
    dots: `<svg class="gb_Ve" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>`,
    settings: `<svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>`,
    colorPicker: '<svg class="hxXJme-LgbsSe-hxXJme-edvN0e" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path class="hxXJme-Jt5cK" d="m0 0h18v18h-18z"></path><path class="gk6SMd-Jt5cK" d="m6.61 11.89l-3.11-3.11-1.06 1.06 4.17 4.16 8.95-8.95-1.06-1.05z"></path></svg>',
    vColorPicker: '<svg width="18" height="18" viewBox="0 0 24 24" focusable="false" class="hxXJme-LgbsSe-gk6SMd-g6cJHd NMm5M"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>',
    location: '<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18"><path d="M10 9.625q.542 0 .917-.375t.375-.917q0-.541-.375-.916T10 7.042q-.542 0-.917.375t-.375.916q0 .542.375.917t.917.375Zm0 7.125q2.583-2.25 3.958-4.49 1.375-2.239 1.375-3.76 0-2.458-1.541-3.979Q12.25 3 10 3T6.208 4.521Q4.667 6.042 4.667 8.5q0 1.521 1.375 3.76Q7.417 14.5 10 16.75Zm0 1.271q-3.167-2.854-4.708-5.219Q3.75 10.438 3.75 8.5q0-2.958 1.875-4.687Q7.5 2.083 10 2.083t4.375 1.73Q16.25 5.542 16.25 8.5q0 1.938-1.542 4.302-1.541 2.365-4.708 5.219ZM10 8.5Z"/></svg>',
    colorPickerNone: '<svg width="18" height="18" viewBox="0 0 24 24" focusable="false" class="zTETae-hxXJme-LgbsSe-Bz112c NMm5M"><path d="M21.19 21.19l-3.06-3.06-1.43-1.43-8.3-8.3L7 7 2.81 2.81 1.39 4.22l4.25 4.25A8.056 8.056 0 0 0 4.01 13H4c0 4.42 3.58 8 8 8 1.74 0 3.35-.57 4.66-1.51l3.12 3.12 1.41-1.42zM12 19c-3.22 0-5.86-2.55-5.99-5.74l.01-.19c.04-1.14.42-2.25 1.06-3.18l8.16 8.16c-.95.6-2.05.95-3.24.95zm0-14.17l4.25 4.24a6.014 6.014 0 0 1 1.74 4.01l.01.17c-.02.56-.13 1.11-.3 1.62l1.53 1.53c.49-1.03.77-2.18.77-3.4h-.01a7.975 7.975 0 0 0-2.33-5.35L12 2 8.41 5.58 9.83 7 12 4.83z"></path></svg>',
    checkBox: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10.6 15.5 17 9.1l-.7-.7-5.7 5.7-2.85-2.85-.7.7ZM5.625 20q-.7 0-1.162-.462Q4 19.075 4 18.375V5.625q0-.7.463-1.162Q4.925 4 5.625 4h12.75q.7 0 1.163.463.462.462.462 1.162v12.75q0 .7-.462 1.163-.463.462-1.163.462Zm0-1h12.75q.25 0 .437-.188.188-.187.188-.437V5.625q0-.25-.188-.437Q18.625 5 18.375 5H5.625q-.25 0-.437.188Q5 5.375 5 5.625v12.75q0 .25.188.437.187.188.437.188ZM5 5v14V5Z"/></svg>',
    img: `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25Zm2.15-2.65h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM5 19V5 19Z"/></svg>`,
    pencil2: `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.5 19.2q-.425 0-.85-.1t-.8-.3q.45-.425.7-.988.25-.562.25-1.312 0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213 0 1.125-.787 1.913-.788.787-1.913.787Zm0-.7q.825 0 1.412-.587.588-.588.588-1.413 0-.425-.287-.713-.288-.287-.713-.287t-.713.287q-.287.288-.287.713 0 .575-.137 1.05-.138.475-.363.9.125.05.25.05h.25Zm4.6-4.15-1.4-1.4L17.65 5q.275-.275.687-.288.413-.012.713.288t.3.7q0 .4-.3.7ZM7.5 16.5Z"/></svg>`,
    paint: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11 20.95q-.3 0-.5-.2t-.2-.5v-5.8H7q-.65 0-1.075-.425Q5.5 13.6 5.5 12.95v-6.7q0-.9.65-1.55t1.55-.65h10.8v8.9q0 .65-.425 1.075-.425.425-1.075.425h-3.3v5.8q0 .3-.2.5t-.5.2Zm-4.8-10.4h11.6v-5.8h-1.75V8.5h-.7V4.75h-2v2h-.7v-2H7.7q-.65 0-1.075.425Q6.2 5.6 6.2 6.25Zm.8 3.2h10q.35 0 .575-.225.225-.225.225-.575v-1.7H6.2v1.7q0 .35.225.575.225.225.575.225Zm-.8-2.5v2.5V12.95Z"/></svg>',
    text1: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10.3 7.65h7.05v-.7H10.3Zm0 2.7h7.05v-.7H10.3Zm0 2.7h4.05v-.7H10.3ZM7.2 8q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.475 6.6 7.2 6.6t-.487.212Q6.5 7.025 6.5 7.3t.213.487Q6.925 8 7.2 8Zm0 2.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.475 9.3 7.2 9.3t-.487.212Q6.5 9.725 6.5 10t.213.487q.212.213.487.213Zm0 2.7q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q7.475 12 7.2 12t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Zm-3.9 6.1V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1Zm.7-1.7L5.8 16h13.4q.35 0 .575-.225Q20 15.55 20 15.2V4.8q0-.35-.225-.575Q19.55 4 19.2 4H4.8q-.35 0-.575.225Q4 4.45 4 4.8Zm0-13V4v13.8Z"/></svg>',
    text2: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.5 19.2q-.425 0-.85-.1t-.8-.3q.45-.425.7-.988.25-.562.25-1.312 0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213 0 1.125-.787 1.913-.788.787-1.913.787Zm0-.7q.825 0 1.412-.587.588-.588.588-1.413 0-.425-.287-.713-.288-.287-.713-.287t-.713.287q-.287.288-.287.713 0 .575-.137 1.05-.138.475-.363.9.125.05.25.05h.25Zm4.6-4.15-1.4-1.4L17.65 5q.275-.275.687-.288.413-.012.713.288t.3.7q0 .4-.3.7ZM7.5 16.5Z"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm7.2-6.85-8-5.3V17.2q0 .35.225.575Q4.45 18 4.8 18h14.4q.35 0 .575-.225Q20 17.55 20 17.2V6.55Zm0-.85 7.6-5H4.4ZM4 6.55V6 17.2q0 .35.225.575Q4.45 18 4.8 18H4V17.2Z"/></svg>',
    more: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE4IDE4IiAgZmlsbD0iIzAwMCI+CiAgPHBhdGggZD0ibTkgNS41YzEgMCAxLjgtMC44IDEuOC0xLjhzLTAuOC0xLjctMS44LTEuNy0xLjggMC44LTEuOCAxLjggMC44IDEuNyAxLjggMS43em0wIDEuN2MtMSAwLTEuOCAwLjgtMS44IDEuOHMwLjggMS44IDEuOCAxLjggMS44LTAuOCAxLjgtMS44LTAuOC0xLjgtMS44LTEuOHptMCA1LjNjLTEgMC0xLjggMC44LTEuOCAxLjhzMC44IDEuNyAxLjggMS43IDEuOC0wLjggMS44LTEuOC0wLjgtMS43LTEuOC0xLjd6Ii8+Cjwvc3ZnPgo=',
    deleteForever: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwMDAwMCI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz4KICAgIDxwYXRoIGQ9Ik02IDE5YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3SDZ2MTJ6bTIuNDYtNy4xMmwxLjQxLTEuNDFMMTIgMTIuNTlsMi4xMi0yLjEyIDEuNDEgMS40MUwxMy40MSAxNGwyLjEyIDIuMTItMS40MSAxLjQxTDEyIDE1LjQxbC0yLjEyIDIuMTItMS40MS0xLjQxTDEwLjU5IDE0bC0yLjEzLTIuMTJ6TTE1LjUgNGwtMS0xaC01bC0xIDFINXYyaDE0VjR6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+Cjwvc3ZnPgo=',
    add: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNOSAxMmMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bTAtNmMxLjEgMCAyIC45IDIgMnMtLjkgMi0yIDItMi0uOS0yLTIgLjktMiAyLTJ6bTAgN2MtMi42NyAwLTggMS4zNC04IDR2M2gxNnYtM2MwLTIuNjYtNS4zMy00LTgtNHptNiA1SDN2LS45OUMzLjIgMTYuMjkgNi4zIDE1IDkgMTVzNS44IDEuMjkgNiAydjF6bTMtNHYtM2gtM1Y5aDNWNmgydjNoM3YyaC0zdjNoLTJ6Ii8+Cjwvc3ZnPgo=`,
    plusBell: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTMgOWgtMnYySDl2MmgydjJoMnYtMmgydi0yaC0yeiIvPgogIDxwYXRoIGQ9Ik0xOCAxN3YtNmMwLTMuMDctMS42My01LjY0LTQuNS02LjMyVjRjMC0uODMtLjY3LTEuNS0xLjUtMS41cy0xLjUuNjctMS41IDEuNXYuNjhDNy42NCA1LjM2IDYgNy45MiA2IDExdjZINHYyaDE2di0yaC0yem0tMiAwSDh2LTZjMC0yLjQ4IDEuNTEtNC41IDQtNC41czQgMi4wMiA0IDQuNXY2em0tNCA1YzEuMSAwIDItLjkgMi0yaC00YzAgMS4xLjkgMiAyIDJ6Ii8+Cjwvc3ZnPgo=`,
    colorPallet: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMjJDNi40OSAyMiAyIDE3LjUxIDIgMTJTNi40OSAyIDEyIDJzMTAgNC4wNCAxMCA5YzAgMy4zMS0yLjY5IDYtNiA2aC0xLjc3Yy0uMjggMC0uNS4yMi0uNS41IDAgLjEyLjA1LjIzLjEzLjMzLjQxLjQ3LjY0IDEuMDYuNjQgMS42N0EyLjUgMi41IDAgMCAxIDEyIDIyem0wLTE4Yy00LjQxIDAtOCAzLjU5LTggOHMzLjU5IDggOCA4Yy4yOCAwIC41LS4yMi41LS41YS41NC41NCAwIDAgMC0uMTQtLjM1Yy0uNDEtLjQ2LS42My0xLjA1LS42My0xLjY1YTIuNSAyLjUgMCAwIDEgMi41LTIuNUgxNmMyLjIxIDAgNC0xLjc5IDQtNCAwLTMuODYtMy41OS03LTgtN3oiLz48Y2lyY2xlIGN4PSI2LjUiIGN5PSIxMS41IiByPSIxLjUiLz4KICA8Y2lyY2xlIGN4PSI5LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE0LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxMS41IiByPSIxLjUiLz4KPC9zdmc+Cg==`,
    bookMark: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDRhMiAyIDAgMCAwLTItMkg5Yy0xLjEgMC0yIC45LTIgMnY3bC0yIDN2Mmg2djVsMSAxIDEtMXYtNWg2di0ybC0yLTNWNHoiLz4KPC9zdmc+Cg==`,
    bookMarkEmpty: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==`,
    listDisplay: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGlkPSJsaXN0X3ZpZXdfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBkPSJNMjAsOSBMNCw5IEw0LDUgTDIwLDUgTDIwLDkgWiBNMjAsMTkgTDQsMTkgTDQsMTUgTDIwLDE1IEwyMCwxOSBaIE0zLDMgQzIuNDUsMyAyLDMuNDUgMiw0IEwyLDEwIEMyLDEwLjU1IDIuNDUsMTEgMywxMSBMMjEsMTEgQzIxLjU1LDExIDIyLDEwLjU1IDIyLDEwIEwyMiw0IEMyMiwzLjQ1IDIxLjU1LDMgMjEsMyBMMywzIFogTTMsMTMgQzIuNDUsMTMgMiwxMy40NSAyLDE0IEwyLDIwIEMyLDIwLjU1IDIuNDUsMjEgMywyMSBMMjEsMjEgQzIxLjU1LDIxIDIyLDIwLjU1IDIyLDIwIEwyMiwxNCBDMjIsMTMuNDUgMjEuNTUsMTMgMjEsMTMgTDMsMTMgWiIgaWQ9Imljb24iIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K`,
    gridDisplay: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMywzIEwxMCwzIEMxMC41NSwzIDExLDMuNDUgMTEsNCBMMTEsMTAgQzExLDEwLjU1IDEwLjU1LDExIDEwLDExIEwzLDExIEMyLjQ1LDExIDIsMTAuNTUgMiwxMCBMMiw0IEMyLDMuNDUgMi40NSwzIDMsMyBaIE0zLDEzIEwxMCwxMyBDMTAuNTUsMTMgMTEsMTMuNDUgMTEsMTQgTDExLDIwIEMxMSwyMC41NSAxMC41NSwyMSAxMCwyMSBMMywyMSBDMi40NSwyMSAyLDIwLjU1IDIsMjAgTDIsMTQgQzIsMTMuNDUgMi40NSwxMyAzLDEzIFogTTE0LDMgTDIxLDMgQzIxLjU1LDMgMjIsMy40NSAyMiw0IEwyMiwxMCBDMjIsMTAuNTUgMjEuNTUsMTEgMjEsMTEgTDE0LDExIEMxMy40NSwxMSAxMywxMC41NSAxMywxMCBMMTMsNCBDMTMsMy40NSAxMy40NSwzIDE0LDMgWiBNMTQsMTMgTDIxLDEzIEMyMS41NSwxMyAyMiwxMy40NSAyMiwxNCBMMjIsMjAgQzIyLDIwLjU1IDIxLjU1LDIxIDIxLDIxIEwxNCwyMSBDMTMuNDUsMjEgMTMsMjAuNTUgMTMsMjAgTDEzLDE0IEMxMywxMy40NSAxMy40NSwxMyAxNCwxMyBaIE05LDkgTDksNSBMNCw1IEw0LDkgTDksOSBaIE05LDE5IEw5LDE1IEw0LDE1IEw0LDE5IEw5LDE5IFogTTIwLDkgTDIwLDUgTDE1LDUgTDE1LDkgTDIwLDkgWiBNMjAsMTkgTDIwLDE1IEwxNSwxNSBMMTUsMTkgTDIwLDE5IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJncmlkX3ZpZXdfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiPjwvcG9seWdvbj4KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDx1c2UgaWQ9Imljb24iIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICA8L2c+Cjwvc3ZnPgo=`,
    search: `<svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg>`,
    inbox: '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M197.694 915.999q-23.529 0-40.611-17.082-17.082-17.082-17.082-40.611V293.694q0-23.529 17.082-40.611 17.082-17.082 40.611-17.082h564.612q23.529 0 40.611 17.082 17.082 17.082 17.082 40.611v564.612q0 23.529-17.082 40.611-17.082 17.082-40.611 17.082H197.694Zm0-45.384h564.612q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847V731.153H623.999q-22.923 39.616-62.001 60.923-39.078 21.308-82.076 21.308-42.999 0-81.999-21.308-38.999-21.307-61.922-60.923H185.385v127.153q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462ZM480.219 768q40.012 0 72.435-23.115T605 685.77h169.615V293.694q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H197.694q-5.385 0-8.847 3.462-3.462 3.462-3.462 8.847V685.77H355q19.923 36 52.565 59.115Q440.206 768 480.219 768ZM197.694 870.615h-12.309 589.23H197.694Z"/></svg>',
    home: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M264 840h109.847V602.308h212.306V840H696V492L480 329.231 264 492v348Zm-51.999 51.999V466.001L480 264.233l267.999 201.768v425.998H534.154V654.306H425.846v237.693H212.001ZM480 584.615Z"/></svg>`,
    pin: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m624 576 96 96v72H516v228l-36 36-36-36V744H240v-72l96-96V312h-48v-72h384v72h-48v264Zm-282 96h276l-66-66V312H408v294l-66 66Zm138 0Z"/></svg>`
}

const mailSvgs = {
    inbox: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M216 912q-29 0-50.5-21.5T144 840V312q0-29.7 21.5-50.85Q187 240 216 240h528q29.7 0 50.85 21.15Q816 282.3 816 312v528q0 29-21.15 50.5T744 912H216Zm0-72h528V696H632q-23 43-63.5 69.5T480 792q-49 0-89.5-26T328 696H216v144Zm264-120q40 0 68-28t28-68h168V312H216v312h168q0 40 28 68t68 28ZM216 840h528-528Z"/></svg>',
    inboxFill: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M216 912q-29 0-50.5-21.5T144 840V312q0-29.7 21.5-50.85Q187 240 216 240h528q29.7 0 50.85 21.15Q816 282.3 816 312v528q0 29-21.15 50.5T744 912H216Zm264-192q40 0 68-28t28-68h168V312H216v312h168q0 40 28 68t68 28Z"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m352 811 128-76 129 76-34-144 111-95-147-13-59-137-59 137-147 13 112 95-34 144ZM243 960l63-266L96 515l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Zm237-333Z"/></svg>',
    starFill: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m243 960 63-266L96 515l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z"/></svg>',
    sent: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M144 864V288l720 288-720 288Zm72-107 454-181-454-181v109l216 72-216 72v109Zm0 0V395v362Z"/></svg>`,
    sentFill: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M144 864V672l288-96-288-96V288l720 288-720 288Z"/></svg>`,
    drafts: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M263.717 960Q234 960 213 938.85T192 888V264q0-29.7 21.15-50.85Q234.3 192 264 192h312l192 192v504q0 29.7-21.162 50.85Q725.676 960 695.96 960H263.717ZM528 432V264H264v624h432V432H528ZM264 264v189-189 624-624Z"/></svg>',
    draftsFill: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M263.717 960Q234 960 213 938.85T192 888V264q0-29.7 21.15-50.85Q234.3 192 264 192h312l192 192v504q0 29.7-21.162 50.85Q725.676 960 695.96 960H263.717ZM528 432h168L528 264v168Z"/></svg>',
    compose: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m291 816-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>`,
    checkBox: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M228.309 891.999q-27.008 0-45.658-18.65-18.65-18.65-18.65-45.658V324.309q0-27.008 18.65-45.658 18.65-18.65 45.658-18.65h503.382q27.008 0 45.658 18.65 18.65 18.65 18.65 45.658v503.382q0 27.008-18.65 45.658-18.65 18.65-45.658 18.65H228.309Zm0-51.999h503.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V324.309q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H228.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v503.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Z"/></svg>`,
    checkBoxFill: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m429 706.153 224.922-223.922-37.153-37.153L429 631.847l-85-84L306.847 585 429 706.153ZM228.309 891.999q-27.008 0-45.658-18.65-18.65-18.65-18.65-45.658V324.309q0-27.008 18.65-45.658 18.65-18.65 45.658-18.65h503.382q27.008 0 45.658 18.65 18.65 18.65 18.65 45.658v503.382q0 27.008-18.65 45.658-18.65 18.65-45.658 18.65H228.309Zm0-51.999h503.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V324.309q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H228.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v503.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846ZM216 312v528-528Z"/></svg>`,
    trash: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>`,
}

function getSvg(iconName) {
    return KeepSvgs[iconName]
}

function getMailSvg(iconName) {
    return mailSvgs[iconName]
}
export const svgService = { getSvg, getMailSvg }

// in template
// <div className="icon" v-html="getSvg('bars')"></div>
// <img style="width:24px; height:24px" :src="getSvg('add')" alt="" />

// in methodes
// function getSvg(iconName) {
//     return svgService.getSvg(iconName)
//   }