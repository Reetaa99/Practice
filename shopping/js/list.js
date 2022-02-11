let list_bar_name = ['品优秒杀', '即将售罄', '超值低价', '女装', '女鞋', '男装', '男鞋', '母婴童装', '食品', '智能数码', '运动户外', '更多分类'];
let suggestion_bar = document.querySelector('nav .suggestion');
for (let i = 0; i < list_bar_name.length; i++) {
  let each = document.createElement('li');
  each.innerHTML = list_bar_name[i];
  suggestion_bar.appendChild(each);
}

let lst_of_product_name = ['apple', 'pear', 'peach', 'berry', 'watermelon', 'melon', 'pineapple', 'carrot', 'vegie', 'alala', 'dsgaeg', 'asfag', 'sadgag', 'asdgag', 'asdgagaggeawg']
let list_of_items = document.querySelector('.list_of_items');
let each_item = document.querySelector('.list_of_items li');
for (let i = 0; i < lst_of_product_name.length; i++) {
  let item = each_item.cloneNode(true);
  let text = item.querySelector('p');
  text.innerHTML = lst_of_product_name[i];
  list_of_items.appendChild(item);
}
