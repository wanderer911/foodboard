import wixData from 'wix-data';

const linksToDP = 'link-projects-name';
const videoPages = [
	{"src":"image://v1/827c6d_4ee6c649ba454f2dad003567767ea7b7~mv2_d_1500_1500_s_2.png/1500_1500/01.png", 
	"title":"GUERLAIN", 
	"link":"/copy-of-inner",
	"priority":4},
	
	{"src":"image://v1/827c6d_eae3390205b446e0b07fea274b9e7755~mv2_d_2048_1536_s_2.png/2048_1536/IPAD%20BLUE.png", 
	"title":"VAN CLEEF & Arpels", 
	"link":"/copy-of-video-guerlain",
	"priority":6},

	{"src":"image://v1/827c6d_c6e170a435d440d5b0ad66b6ba78fe71~mv2_d_1500_1500_s_2.png/1500_1500/01.png", 
	"title":"YOOX Make a Wish", 
	"link":"/copy-of-video-van-cleef",
	"priority":0},
];

function createIndex(images) {
	var flags = [], uniqueItems = [], i;
	for( i=0; i<images.length; i++) {
    	if( flags[images[i].name]) continue;
    	flags[images[i].name] = true;
    	uniqueItems.push(images[i]);
	}	
	return uniqueItems.map((item)=>{
		return {"src":item.image, "title":item.name, "link":item[linksToDP],category:item.category,priority:item.priority}
	})
}

$w.onReady(function () {
	
	wixData.query("projects").ascending("category").eq("thumbnail", true).find().then((results)=>{
		const sortedItems =  [...videoPages,...createIndex(results.items)];
		sortedItems.sort(sortItems);
		console.log(sortedItems);
		$w('#gallery1').items = sortedItems;
	});	
	
	// setting initial priority. on thumbnail = true items. PS you need to have permit in real db
	
	// wixData.query('projects').eq('thumbnail',true).limit(1000).find().then(results=>{
	// 	let items = results.items;
	// 	items.forEach(async(item,index)=>{
	// 		item.priority = setInitialPriority(item);
	// 		try {
	// 			const response = await wixData.update('projects',item);
	// 			console.log(response);
	// 		} catch(e){
	// 			console.log(e);
	// 		}
	// 	});
	// });

	// function setInitialPriority(item){
	// 	return initialOrder.findIndex(order=>{
	// 		return item.name.toLowerCase() === order.toLowerCase();
	// 	});
	// }
	// const initialOrder = ['YOOX Make a Wish','YOOX The Most Exclusive Collection',
	// 	'Nike air max zero','Verizon','Guerlain','Audi q-riosity','VAN CLEEF & Arpels','Lenovo','MasterCard','Ueno','Google','Adobe Goverment',
	// 	'Adobe 25 years of photoshop','Furla','Honda uk aftersales','Pitches'];
	
});

function sortItems(item1,item2){
	if (item1.priority === item2.priority){
		let result = sortByCategory(item1,item2);
		return result;
	}else if(item1.priority === -1){
		return 1;
	}else if(item2.priority===-1){
		return -1;
	}else {
		if (item1.priority>item2.priority){
			return 1;
		}else {
			return -1
		}
	}


}

function sortByCategory(item1,item2){
		// commercial is higher than any other category
		if(item1.category === item2.category){
			return 0;
		}
		else if(item1.category ==='commercial'){
			return 1;
		}
		else if(item2.category ==='commercial'){
			return -1;
		}
		return 0;
}

// function setInitialPriority(item){
// 	return initialOrder.findIndex(order=>{
// 		return item.name.toLowerCase() === order.toLowerCase();
// 	});
// }

// const initialOrder = ['YOOX Make a Wish','YOOX The Most Exclusive Collection','Nike air max zero','Verizon','Guerlain','Audi q-riosity','VAN CLEEF & Arpels','Lenovo','MasterCard','Ueno','Google','Adobe Goverment',
// 	'Adobe 25 years of photoshop','Furla','Honda uk aftersales','Pitches'];
