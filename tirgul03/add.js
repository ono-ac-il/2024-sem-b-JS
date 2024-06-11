class Article {
    constructor(heading, content, publishDate) {
        this.heading = heading;
        this.content = content;

        if (typeof publishDate === 'string') {
            this.publishDate = new Date(publishDate);
        } else {
            this.publishDate = publishDate;
        }

    }

    setPublishDate(d) {
        this.publishDate = publishDate;
    }

    getHTML() {
        if (new Date() < this.publishDate) {
            return "";
        }
        return `<div>
            <h2>${this.heading}</h2>
            <small>${this.publishDate}</small>
            <p>${this.content}</p>
            <hr>
        </div>`;
    }
}

const articles = [];
function addArticle() {
    // heading content publish-date
    const $heading = document.getElementById('heading').value;
    const $content = document.getElementById('content').value;
    const $publishDate = document.getElementById('publish-date').value;

    const a = new Article($heading, $content, $publishDate);
    articles.push(a);


    function articleToHTML(a) {
        return a.getHTML();

    }
    document.getElementById('test').innerHTML = articles.map(articleToHTML).join("");
}