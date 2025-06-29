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

