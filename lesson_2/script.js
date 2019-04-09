class GoodsItem {
	constructor(title, price) {
		this.title = title;
 		this.price = price;
}
	render() {
		return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price} руб.</p><button class="button-buy">Купить</button></div>`;
	}
}

class GoodsList {
	constructor() {
		this.goods = [];
	}
	fetchGoods() {
		this.goods = [
			{ title: 'Harrar', price: 250 },
			{ title: 'Sidamo', price: 250 },
			{ title: 'Yirgacheffe', price: 350 },
			{ title: 'Kochere', price: 450 },
		];
	}
	render() {
		let listHtml = '';
		this.goods.forEach(good => {
		const goodItem = new GoodsItem(good.title, good.price);
		listHtml += goodItem.render();
	});
	document.querySelector('.goods-list').innerHTML = listHtml;
	}
	sumGoodsList() {
		let sum = 0;
		this.goods.forEach(good => {
		const goodItem = new GoodsItem(good.price);
		sum += good.price;
	});
		return sum;
	}
}

//Создадим класс для корзины товаров

class Basket {
	constructor () {

	}

	//создадим метод добавления товаров в корзину
	addToBasket () {

	}

	//создадим метод рендора содежимого корзины на страницу
	renderBasket () {

	}

	//создадим метод открытия корзины
	openBasket () {

	}

	//создадим метод очистки корзины
	remove () {

	} 
}


//Создадим класс для элемента товаров корзины

class ElemBasket {
	constructor () {

	}

	//создадим метод добавления\удаления товара в корзине по кнопке +\-
}

const list = new GoodsList();
list.fetchGoods();
list.render();


console.log(list);
console.log(list.sumGoodsList());
