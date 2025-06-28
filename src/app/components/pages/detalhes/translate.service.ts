
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({ providedIn: 'root' })
// export class TranslateService {
//     private apiUrl = 'https://libretranslate.com/translate';

//     constructor(private http: HttpClient) { }

//     translate(text: string, targetLang: string = 'pt'): Promise<string> {
//         return this.http.post<any>(this.apiUrl, {
//             q: text,
//             source: 'en',
//             target: targetLang,
//             format: 'text'
//         }).toPromise().then(res => res.translatedText);
//     }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TranslateService {
    constructor(private http: HttpClient) { }

    async translate(text: string): Promise<string> {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|pt`;

        const response: any = await firstValueFrom(this.http.get(url));
        return response?.responseData?.translatedText || text;
    }
}

