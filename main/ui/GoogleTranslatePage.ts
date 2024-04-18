import { By, PageElement } from '@serenity-js/web';

export const GoogleTranslatePage = {
    textArea: () =>
        PageElement.located(By.xpath("//textarea")).describedAs('text area texto original'),
    palabraTraducidaLabel: () =>
        PageElement.located(By.xpath("//span[@class='ryNqvb']")).describedAs('label texto traducido'),
    idiomaDestinoInglesButton: () =>
        PageElement.located(By.xpath("//button[@data-language-code='en' and @id='i16']")).describedAs('botón idioma destino Ingles'),
}
