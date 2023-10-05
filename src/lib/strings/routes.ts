const routes = [
	{
		name: "Home",
		href: "/",
		class: "nav-link",
	},
	{
		name: "Purchase Orders",
		href: "/purchaseOrders",
		class: "nav-link",
		options: [
			{
				name: "Create New POs",
				href: "/purchaseOrders/create",
			},
		]
	},
	{
		name: "Payees",
		href: "/payees",
		class: "nav-link",
		options: [
			{
				name: "Create New Payees",
				href: "/payees/create",
			},
		]
	},
];
