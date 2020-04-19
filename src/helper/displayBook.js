
export const DisplayBook = (result, book) => {
    const filterBook = result.filter(singleBook => {
        return singleBook.volumeInfo.title.toLowerCase().includes(book.toLowerCase());
    });
    return filterBook
};


