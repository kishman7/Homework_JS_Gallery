let element = document.querySelectorAll(".img");//шукає масив елементів
let start = 0; //відповідає за початковий індекс 1-ої картинки
let finish = element.length - 1; //відповідає за останній індекс останньої картинки

function showImg(el, num) { //зміна картинки при натисканні її в галереї
    start = num;
    console.log(el);
    document.querySelector("#mainImg").src = el.src;
}

function showImgPhotoLeft() { //зміна картинки при натискані стрілки в ліво
    start = start - 1;
    document.querySelector("#mainImg").src = element[start].src;
    if (start == 0) {
        start = finish + 1;
    }

}

function showImgPhotoRight() { //зміна картинки при натискані стрілки в право
    document.querySelector("#mainImg").src = element[start].src;
    if (start == finish) {
        start = 0;
    }
    else
    {
        start = start + 1;
    }
}
