function hasDiscount(order) {
  	basePrice = order.basePrice();
   	return basePrice > 1000;
}