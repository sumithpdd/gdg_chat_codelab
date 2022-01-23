---
contentKey: chapter
title: HomeScreenandAppbar
stepNo: 3
metaTitle: This is the title tag of this page
metaDescription: This is the meta description
date: 2021-01-13T22:58:35.993Z
duration: 30 min
tags:
  - flutter
  - firebase
keywords:
  - flutter
  - firebase
  - studying
---
# 🏠 Home Screen and Appbar

Let's start by cleaning up our main.dart.

We're going to name the **title: 'Food Delivery'**.

Next we have hid the banner in the top right, all I have to do is type **debugShowCheckedModeBanner: false** and set to false and then for the theme data we're going to specify a scaffold background color so **scaffoldBackgroundColor: Colors.grey[50]** and then we want to set a primary color and we'll make that **primarySwatch: Colors.deepOrange**

We can remove the **MyHomePage** and we're going to replace it with **home: HomeScreen()**.

```dart
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Food Delivery',
      theme: ThemeData(
          primarySwatch: Colors.deepOrange,
          scaffoldBackgroundColor: Colors.grey[50]),
      home: HomeScreen(),
    );
  }
}
```

So let's create a new directory under our **lib folder** 📁 called **screens** inside screens. We're going to make a file 📄 called **home_screen.dart**. And then type in **stf** which is going to let me create a **stateful** widget type in shortcuts for long snippets of code.

- [ ]  Name it home screen after that.
- [ ]  Import material by hovering over state widget. On the Mac you can hit command period and then go down to material and hit enter.
- [ ]  Replace the container here with a scaffold for now.
- [ ]  Go back to main that are hover over home screen a quick fix and then we can import the **home_screen.dart**.

And once we had saved we see that the app updates now look in our home screen we can see that it contains an app bar with a title an icon button and a flat button on the right side .

```dart
import 'package:flutter/material.dart';
import 'package:food_delivery/data/data.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.account_circle),
          iconSize: 30.0,
          onPressed: null,
        ),
        title: Text('Food Delivery'),
        actions: [
          FlatButton(
            onPressed: null,
            child: Text('Cart (${currentUser.cart.length})',
              style: TextStyle(
                color: Colors.white,
                fontSize: 20.0,
              ),
            ),
          )
        ],
      ),
    );
  }
}
```

Go to our home screen and we're going to add an app bar property here **Text('Food Delivery'),** setup a leading icon button **icon: Icon(Icons.account_circle)**, and set the icon size equal to 30 point , add the oppressed method now to the flat button for our cart underneath title or add actions and then we can make a flat button with child: **Text('Cart (${currentUser.cart.length})'**.

This is the amount of items in our cart so we can use **string interpolation** and we'll put a prentices first current user and import the **data** to get the cart length. And that's going to be the number of items in our cart and then don't forget to add the **onPressed: null** So the button appears and we see that our text appeared in the top right. But we need to style the text. So we're going to add a style TextStyle colour. Colors are white and then font size equal to 20, So it looks more like this.

![images/chatapp/Untitled%201.png](images/chatapp/Untitled%201.png)

We would like to move our styles to a **common location**

Create a new **file**📄 under **helpers** 📁 → style.dart

```dart
import 'package:flutter/material.dart';

const Color primary = Colors.deepOrange;
const red = Colors.red;
const Color white = Colors.white;
const Color black = Colors.black;
const Color grey = Colors.grey;
const Color green = Colors.green;
```

Modify **main.dart** and use the primary color for background

```dart
theme: ThemeData(
          primarySwatch: **primary**,
          scaffoldBackgroundColor: Colors.grey[50]),
```

## The Search bar

Next let's create our search bar. And this is going to live right underneath our app

In **file**📄 **home_screen.dart**

Create the body after AppBar.

![images/chatapp/Untitled%202.png]images/chatapp/Untitled%202.png)

```dart
body: ListView(
        children: [
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: TextField(
              decoration: InputDecoration(
                  contentPadding: EdgeInsets.symmetric(vertical: 15.0),
                  fillColor: white,
                  filled: true,
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(30),
                    borderSide: BorderSide(width: 0.8),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(30.0),
                    borderSide: BorderSide(
                        width: 0.8, color: Theme.of(context).primaryColor),
                  ),
                  hintText: 'Search Food or Restaurants',
                  prefixIcon: Icon(
                    Icons.search,
                    size: 30.0,
                  ),
                  suffixIcon:
                      IconButton(icon: Icon(Icons.clear), onPressed: () {})),
            ),
          )
        ],
      ),
```

And we're going to use a **ListView** - list that has children and also give us scrolling.

The first child will be a **TextField**. To style this text field we need to add an **InputDecoration**

and add a border **OutlineInputBorder**. And we're going to give a radius that is circular. Point to know and that gives us the rounded corners on our border and then we also want to make the border less thick so we can add the property **border side** for our side with **0.8**.

Next add a hintText **hintText: 'Search Food or Restaurants'** and then we also need to have an icon in the beginning and an icon at the end.

So of the **prefixIcon Icon(Icons.search** and add a size to 30 point out

Then for the icon on the right side. That would be an **IconButton** where you can click it so you can clear out the text in the text field. So the suffix icon **icon: Icon(Icons.clear), onPressed: () {})**

In order to reduce the size of our text field. We can add some padding around the text field by hovering over the text field and then clicking **add padding** and set padding to **EdgeInsets.all(20.0)** after that if we go back into decoration let's add **contentPadding: EdgeInsets.symmetric(vertical: 15.0)**, we see that the search text is tightened up

### Now to the fill color

The Fill color to be anything you want we could make a color start red and then in order to show the full color we need to use the property **filled: true** ,and then we see the inside of our text box now blue but for our app we want to be color - **fillColor: white**

The last property we want to add is called **enabledBorder**. So this is also going to be an **OutlineInputBorder** and we can just copy this one from above.

### Theming

For the border side we're going to add an extra property called color and this is going to be **color: Theme.of(context).primaryColor)**. And this is what we said inside our **main.dart** where we set the primary color to colors that deeporange. If we comment out it turns back to black. And now if we look back at our home screen we see that the border of our text field is not orange.

## Recent order

![Food%20Delivery%20Flutter%20Workshop%2079e4cc0958e84e96900d70985520538c/Untitled%203.png]images/chatapp/Untitled%203.png)

Now let's work on creating the recent orders horizontal list view and we can see that this is going
to be a column where we have the first widget being a text widget and then underneath it we're going to have a container which contains a list of your orders. And it's going to scroll horizontally ⇒ so we can see all of our recent orders

### Code reusability and Seperation

Inside our **lib** directory there is a **folder** widgets create a file name **recent_orders.dart** we type **stl** and that's going to give us the shortcut for the stateless widget called **RecentOrders**.
And then remember to always import **material.dart** .

Let's go back to **home_screen.dart** and then underneath the padding widget add the **RecentOrders()**,  the end of the text field we're going to see recent orders widget and remember to import and save.

Back in recent orders we can start building out the column widget so let's remove **container**
and we'll put **Column().**

```dart
return Column(
      children: [
        Text(
          'Recent Orders',
          style: TextStyle(
              fontSize: 24.0, fontWeight: FontWeight.w600, letterSpacing: 1.2),
        ),
      ],
    );
```

The column is going to have children and then the first child in the column will be a text widget.
'**Recent Orders'** and we'll style the text with **FontSize: 24.0**, **fontWeight: FontWeight.w600,** **letterSpacing: 1.2** ,so its bold and with letter spacing which will set to 1.2

And when we hit save we see that our recent orders appeared on the screen.

And if we compared to our desire UI we see that the recent orders is on the left side of the screen.
To move recent orders on the left side of the column set the cross axis alignment to start
which is the horizontal part of the column **crossAxisAlignment: CrossAxisAlignment.start**.

### Placing and spacing the text

Add some padding to our text , right click → add padding set padding: const EdgeInsets.all(20.0), Now our text's are space nicely in order

### ListView with recent orders

Create the list view underneath our padding widget we will create a container which is going to have a set height to 120 will add a color for now so we can see it easier colors red

```dart
Container(
          height: 120,
          color: red,
        )
```

and then add a child list view builder - with awesome flutter snippets we can type in listview B and that gives us the shortcut for listview builder hit enter

```dart
ListView.builder(
  itemCount: currentUser.orders.length,
  itemBuilder: (BuildContext context, int index) {
    return;
  },
),
```

and then we'll set the item count to **currentUser.orders.length** and make sure you import current user we get currentUser from our data.dart file

let's make our list of order appear in the ListView .

- [ ]  make a variable called **Order order = currentUser.orders[index];** import **Order** if not imported
- [ ]  then let's return **return Text([order.food.name](http://order.food.name/));**
- [ ]  save we see that all our orders on the screen

This List view is vertical and we want our scroll view to be horizontal add **scrollDirection: Axis.horizontal,** it will start to scroll horizontally.

### Private function to display order details for list

Let's build the function that's going to display each of our recent orders.
remove **Text([order.food.name](http://order.food.name/))** and replace it with **_buildRecentOrder(context,order);** we're going to pass in the context so we can access the color and then the order.
Now back at the top of our recent orders we're going to write the function **_buildRecentOrder(BuildContext context, Order order)**.

And if we take a look at our UI again we can see that our recent orders - it has a container with
a light border around it and then consists of a row widget with an image with rounded
corners and then a column widget with text widgets inside and then a button for the icon

```dart
return Container(
  margin: EdgeInsets.all(10.0),
  width: 320,
  decoration: BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.circular(15.0),
      border: Border.all(
        width: 1.0,
        color: Colors.grey[200],
      )),
);
```

by building out our container let's return container with **margin: EdgeInsets.all(10.0)**
we'll set the width: 320 pixels and then **BoxDecoration ,** Color colors ⇒ white and we'll see how that looks. Now we have our boxes here.
Let's add a border radius
order radius not circular.
Fifteen point 0.
And then for the light ray border around our container we can add border border dot Hall and then we'll
start with to 1.0 and the color to colors dark gray 200
and it's a bit hard to see but if we remove the color of our container it'll be easier.
And now we see the containers with their gray borders.
Now let's create our rows

```dart
child: Row(
        children: [
          Image(
            height: 100.0,
            width: 100.0,
            image: AssetImage(order.food.imageUrl),
            fit: BoxFit.cover,
          )
        ],
      ),
```

And it's going to have the image first so the child of the container will be a row.
Children and then to add the image - **image: AssetImage(order.food.imageUrl) ,** we pass in the order we know the order has a food , the food has an image URL lets it save.
And now the food appears in each one of the containers, set the size s add a height - > **height: 100.0** and **width: 100.0 ,** two in order to take up the entire height and width of our box.

We can set it fit box and add rounded corners to our image and we can easily do that by wrapping our image with a new widget. So a command + period one mac and ctrl + period good and a wrap with new widget **ClipRRect**
add a border radius **borderRadius: BorderRadius.circular(15.0),** Fifteen point.
Save and check the screen again.

Next we need to add a column that's going to contain three different text widget so below our clip correct.
Let's put a comma and then we'll make a column widget with children

```dart
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text(
      order.food.name,
      style: TextStyle(
        fontSize: 18.0,
        fontWeight: FontWeight.bold,
      ),
      overflow: TextOverflow.ellipsis,
    ),
    SizedBox(height: 4.0),
    Text(
      order.restaurant.name,
      style: TextStyle(
        fontSize: 16.0,
        fontWeight: FontWeight.w600,
      ),
      overflow: TextOverflow.ellipsis,
    ),
    SizedBox(height: 4.0),
    Text(
      order.date,
      style: TextStyle(
        fontSize: 16.0,
        fontWeight: FontWeight.w600,
      ),
      overflow: TextOverflow.ellipsis,
    ),
  ],
),
```

- [ ]  first which it will be text widget Text([order.food.name](http://order.food.name/),..
- [ ]  next we have put our Text([order.restaurant.name](http://order.restaurant.name/), ...
- [ ]  and then Text(order.date, ....

and our text appeared to make these now to make it left aligned. for the Column set
crossAxisAlignment: CrossAxisAlignment.start, and center mainAxisAlignment: [MainAxisAlignment.center](http://mainaxisalignment.center)

now it's time to style our text let's add fontSize: 18.0, font weight fontWeight: FontWeight.bold in the name of our orders , bold for the restaurant in style fontSize: 16.0 and I will make the font semi bold FontWeight.w600 and lastly
for the order date  we can just copy our style from restaurant name.

Add Recent orders

Let's create another container.

```dart
Container(
  margin: EdgeInsets.only(right: 20.0),
  width: 48.0,
  decoration: BoxDecoration(
    color: Theme.of(context).primaryColor,
    borderRadius: BorderRadius.circular(30.0),
  ),
  child: IconButton(
    icon: Icon(Icons.add),
    iconSize: 30.0,
    color: Colors.white,
    onPressed: () {},
  ),
),
```

And this is going to have a margin to the right Twenty point **margin: EdgeInsets.only(right: 20.0),**

**with a width of 48**. The decoration will be BoxDecoration color ⇒ **color: Theme.of(context).primaryColor** with a  circular border **borderRadius: BorderRadius.circular(30.0)**.

And that's going to create a container with rounded corners. Now all we have to do is add the icon button , with color white IconButton(icon: Icon(Icons.add) ....

Now in order to push this button all the way to the right side we need to wrap our image and our column in a row widget and then we can use the property of our main axis alignment for our larger row container and solder to space between. **Row( mainAxisAlignment: MainAxisAlignment.spaceBetween**,

And that's going to push our icon button all the way to the right side of our container.

So let's go back up and wrap the clip our wrecked with a widget - **Expanded**.

Highlight container, the container containing our column on Mac - We hold on hold and click up up that moves our container up two lines into our row apply themainAxisAlignment: MainAxisAlignment.spaceBetween, and that pushed the button all the way to the right side.

Now let's try testing our overflow by adding more characters to our text widget. **overflow: TextOverflow.ellipsis,**

Save , We see that the text widget pushes our icon button off the screen and that's not what we want. wrap our container containing our column in a widget called Expanded and once we add save we see that our widget disappears because the column does not have a defined width.

And that's because we need to also wrap our entire row containing the image and the container in an expanded widget to and now we see that our texture appears.

**recent_orders.dart**

```dart
import 'package:flutter/material.dart';
import 'package:food_delivery/data/data.dart';
import 'package:food_delivery/helpers/style.dart';
import 'package:food_delivery/models/order.dart';

class RecentOrders extends StatelessWidget {
  _buildRecentOrder(BuildContext context, Order order) {
    return Container(
      margin: EdgeInsets.all(10.0),
      width: 320,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(15.0),
        border: Border.all(
          width: 1.0,
          color: Colors.grey[200],
        ),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Expanded(
            child: Row(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(15.0),
                  child: Image(
                    height: 100.0,
                    width: 100.0,
                    image: AssetImage(order.food.imageUrl),
                    fit: BoxFit.cover,
                  ),
                ),
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(12.0),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          order.food.name,
                          style: TextStyle(
                            fontSize: 18.0,
                            fontWeight: FontWeight.bold,
                          ),
                          overflow: TextOverflow.ellipsis,
                        ),
                        SizedBox(height: 4.0),
                        Text(
                          order.restaurant.name,
                          style: TextStyle(
                            fontSize: 16.0,
                            fontWeight: FontWeight.w600,
                          ),
                          overflow: TextOverflow.ellipsis,
                        ),
                        SizedBox(height: 4.0),
                        Text(
                          order.date,
                          style: TextStyle(
                            fontSize: 16.0,
                            fontWeight: FontWeight.w600,
                          ),
                          overflow: TextOverflow.ellipsis,
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.only(right: 20.0),
            width: 48.0,
            decoration: BoxDecoration(
              color: Theme.of(context).primaryColor,
              borderRadius: BorderRadius.circular(30.0),
            ),
            child: IconButton(
              icon: Icon(Icons.add),
              iconSize: 30.0,
              color: Colors.white,
              onPressed: () {},
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20.0),
          child: Text(
            'Recent Orders',
            style: TextStyle(
              fontSize: 24.0,
              fontWeight: FontWeight.w600,
              letterSpacing: 1.2,
            ),
          ),
        ),
        Container(
          height: 120,
          color: white,
          child: ListView.builder(
            physics: BouncingScrollPhysics(),
            padding: EdgeInsets.only(left: 10.0),
            scrollDirection: Axis.horizontal,
            itemCount: currentUser.orders.length,
            itemBuilder: (BuildContext context, int index) {
              Order order = currentUser.orders[index];

              return _buildRecentOrder(context, order);
            },
          ),
        )
      ],
    );
  }
}
```

So this is doing is it's taking this row which contains the image and the column expanding it to as large as it can be from the icon button. And then inside the container widget here we use expanded again to expand this container to the large with it can be.

And then our icon button container stays in the same place because we set the margin to edge and that's not only right. So no matter what. All right. Come button will always be on the right side.
And if our recent orders container was longer for any reason than our expanded widget wrap error column would expand to as large as it can fit between the image and the icon button.
Now we can remove the extra texture because we know it's working. And the very last thing we have to do is add a little bit more padding on the left side of our recent orders list view because we want to be in line with our text and our search bar.

add something called Physics bouncing scroll physics and this won't have any effect on IOS because IOS lists are naturally bouncy.

But if you're an Android you're not going to have the rough stop and then it'll bounce just like I always devices.

## Nearby Restaurants

![Food%20Delivery%20Flutter%20Workshop%2079e4cc0958e84e96900d70985520538c/Untitled%204.png]images/chatapp/Untitled%204.png)

Go back to home_screen.dart

and now if we look back at our UI we're going to work on the nearby restaurant and this is a column where we have the text in here for the first widget.
And beneath this we're going to have a another column which contains each one of our restaurants.
And the reason we use a column here instead of a list builder is because if we used listview builder then we would only be scrolling this portion of the page and the page here would not disappear and go up into the screen.
That's why we need to use a column widget.

So then we add a bunch of restaurants down here and then when we scroll up we're going through the column instead of being stuck on a vertical list builder.

```dart
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: Text(
        'Nearby Restaurants',
        style: TextStyle(
          fontSize: 24.0,
          fontWeight: FontWeight.w600,
          letterSpacing: 1.2,
        ),
      ),
    )
  ],
)
```

So let's start by making our column widget.
We'll have children and the first shall we text nearby restaurant then want to style it.
Textile font size 20 4.0 font weight font weight w 600 and lastly we need to set the letter spacing to one point two.
And let's move the nearby restaurants over to the left side of our screen by axis and cross axis alignment cross axis alignment dot start.
And just like our recent orders we need our padding on our text edge in such start symmetric horizontal twenty point out and then immediately

below this padding widget we're going to call a function called Buildrestaurants **_buildRestaurants()** the very top of our home screen that are let's create that functional **_buildRestaurants** and doesn't take in any parameters.

We're going to have a list of widgets and we'll call it restaurant list and of equal to nothing.
And then we want to return a column widget with children and instead of saying widget and then empty braces we can just put a restaurant list because that's also a list of widgets.
And now the plan is to loop through our restaurant list which is in data.dart

```dart
_buildRestaurants() {
    List<Widget> restaurantList = [];
    restaurants.forEach((Restaurant restaurant) {});
    return Column(children: restaurantList);
  }
```

So we're looping through our lists of restaurants and then for each restaurant we're going to display the data and add it to our restaurant list which gets returned in a column.
So let's create it by looing restaurants do a foreach and here we get a restaurant and make sure the imported restaurant.
Now we need to create these containers.
And if we look at our restaurant you out here it's pretty similar to our recent orders where we have a container on the outside that has a border.
We have an image on the left side and then a column containing a bunch of text widgets and our image and column would be wrapped in a Row.

So let's first start by making this container.

```dart
restaurants.forEach((Restaurant restaurant) {
      restaurantList.add(Container(
        margin: EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
        decoration: BoxDecoration(
          color: white,
          borderRadius: BorderRadius.circular(15.0),
          border: Border.all(
            width: 10.0,
            color: Colors.grey[200],
          ),
        ),
        child: Row(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(15.0),
              child: Image(
                height: 150.0,
                width: 150.0,
                image: AssetImage(restaurant.imageUrl),
                fit: BoxFit.cover,
              ),
            ),
          ],
        ),
      ));
    });
```

```dart
Expanded(
    child: Container(
      margin: EdgeInsets.all(12.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            restaurant.name,
            style: TextStyle(
              fontSize: 20.0,
              fontWeight: FontWeight.bold,
            ),
            overflow: TextOverflow.ellipsis,
          ),
          SizedBox(height: 4.0),
          Text(
            restaurant.address,
            style: TextStyle(
              fontSize: 16.0,
              fontWeight: FontWeight.w600,
            ),
            overflow: TextOverflow.ellipsis,
          ),
          SizedBox(height: 4.0),
          Text(
            '0.2 miles away',
            style: TextStyle(
              fontSize: 16.0,
              fontWeight: FontWeight.w600,
            ),
            overflow: TextOverflow.ellipsis,
          )
        ],
      ),
    ),
  )
```

### Rating widget

Then let's go into our widget folder make a new file called rating_stars.dart.
And then here we're gonna make a stateless widget rating stars type stl, import material.dart.

```dart
import 'package:flutter/material.dart';

class RatingStars extends StatelessWidget {
  final int rating;

  RatingStars(this.rating);

  @override
  Widget build(BuildContext context) {
    String stars = '';
    for (int i = 0; i < rating; i++) {
      stars += '⭐  ';
    }
    stars.trim();
    return Text(
      stars,
      style: TextStyle(
        fontSize: 18.0,
      ),
    );
  }
}
```

It's going to take in the rating which is a final in rating and then for the constructor of our rating
source we'll have it taken this start rating.
Now go back to the home screen and remember to import rating source.

Final code for **home_screen.dart**

```dart
import 'package:flutter/material.dart';
import 'package:food_delivery/data/data.dart';
import 'package:food_delivery/helpers/style.dart';
import 'package:food_delivery/models/restaurant.dart';
import 'package:food_delivery/widgets/rating_stars.dart';
import 'package:food_delivery/widgets/recent_orders.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  _buildRestaurants() {
    List<Widget> restaurantList = [];
    restaurants.forEach((Restaurant restaurant) {
      restaurantList.add(Container(
        margin: EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
        decoration: BoxDecoration(
          color: white,
          borderRadius: BorderRadius.circular(15.0),
          border: Border.all(
            width: 1.0,
            color: Colors.grey[200],
          ),
        ),
        child: Row(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(15.0),
              child: Image(
                height: 150.0,
                width: 150.0,
                image: AssetImage(restaurant.imageUrl),
                fit: BoxFit.cover,
              ),
            ),
            Expanded(
              child: Container(
                margin: EdgeInsets.all(12.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      restaurant.name,
                      style: TextStyle(
                        fontSize: 20.0,
                        fontWeight: FontWeight.bold,
                      ),
                      overflow: TextOverflow.ellipsis,
                    ),
                    **RatingStars(restaurant.rating),**
                    SizedBox(height: 4.0),
                    Text(
                      restaurant.address,
                      style: TextStyle(
                        fontSize: 16.0,
                        fontWeight: FontWeight.w600,
                      ),
                      overflow: TextOverflow.ellipsis,
                    ),
                    SizedBox(height: 4.0),
                    Text(
                      '0.2 miles away',
                      style: TextStyle(
                        fontSize: 16.0,
                        fontWeight: FontWeight.w600,
                      ),
                      overflow: TextOverflow.ellipsis,
                    )
                  ],
                ),
              ),
            )
          ],
        ),
      ));
    });
    return Column(children: restaurantList);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.account_circle),
          iconSize: 30.0,
          onPressed: null,
        ),
        title: Text('Food Delivery'),
        actions: [
          FlatButton(
            onPressed: null,
            child: Text(
              'Cart (${currentUser.cart.length})',
              style: TextStyle(
                color: Colors.white,
                fontSize: 20.0,
              ),
            ),
          )
        ],
      ),
      body: ListView(
        children: [
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: TextField(
              decoration: InputDecoration(
                  contentPadding: EdgeInsets.symmetric(vertical: 15.0),
                  fillColor: white,
                  filled: true,
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(30),
                    borderSide: BorderSide(width: 0.8),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(30.0),
                    borderSide: BorderSide(
                        width: 0.8, color: Theme.of(context).primaryColor),
                  ),
                  hintText: 'Search Food or Restaurants',
                  prefixIcon: Icon(
                    Icons.search,
                    size: 30.0,
                  ),
                  suffixIcon:
                      IconButton(icon: Icon(Icons.clear), onPressed: () {})),
            ),
          ),
          RecentOrders(),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Text(
                  'Nearby Restaurants',
                  style: TextStyle(
                    fontSize: 24.0,
                    fontWeight: FontWeight.w600,
                    letterSpacing: 1.2,
                  ),
                ),
              ),
              _buildRestaurants()
            ],
          )
        ],
      ),
    );
  }
}
```

## Restaurant Screen and Navigation

```dart
restaurants.forEach((Restaurant restaurant) {
      restaurantList.add(
        **GestureDetector(
          onTap: () => Navigator.push(
              context,
              MaterialPageRoute(
                builder: (_) => RestaurantScreen(restaurant: restaurant),
              )),
......**
```

We need navigation from our restautant list to restaurant screen so let's go up to the top of our **_buildRestaurants** and we're gonna wrap our container that we add to our restaurant list in a new widget called a **GestureDetector** it has an **onTap** function. And when we tap our container want uaw  navigator to push to the **RestaurantScreen** with a material page route builder. And then we want to instantiate the restaurant screen.

```dart
import 'package:flutter/material.dart';
import 'package:food_delivery/models/restaurant.dart';

class RestaurantScreen extends StatefulWidget {
  final Restaurant restaurant;
  RestaurantScreen({this.restaurant});

  @override
  _RestaurantScreenState createState() => _RestaurantScreenState();
}

class _RestaurantScreenState extends State<RestaurantScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold();
  }
}
```

So a lets create arestaurant screen and that'll take in a restaurant as a parameter. So inside our screens folder we'll make a new file **restaurant_screen.dart**. This will be a stateful widget. So type **stf RestaurantScreen** and then make sure to **material.dart** And it takes a parameter restaurant. So **final Restaurant restaurant;.** And therefore the constructor.

And make sure that the **curly braces** around this our restaurant,  So it's a named parameter

In the build  method make remove **container** and change this to a **scaffold** .

All we have to do is import **restaurant_screen.dart** in the home screen.

### Restaurant Detail Screen with Animation

![Food%20Delivery%20Flutter%20Workshop%2079e4cc0958e84e96900d70985520538c/Untitled%205.png]images/chatapp/Untitled%205.png)

Now let's work on building out our restaurant screen. We can see that we're using a stack widget here and then putting the image on first and then we're stacking
two icon buttons on top of our image below this we have text in a column and this is in a row here where the restaurant name and the distances then below that we have a another row with two flat buttons.
That's a reviews and contact so in order to build out our restaurant screen we need to use a container if we use a list view then our image will not be able to go underneath our standard spa so to show you as what I would look like or create body.

```dart
body: Column(
        children: [
          Stack(
            children: [
              Image(
                height: 220.0,
                width: MediaQuery.of(context).size.width,
                image: AssetImage(
                  widget.restaurant.imageUrl,
                ),
                fit: BoxFit.cover,
              )
            ],
          )
        ],
      ),
```

Crete a column add a stack widget that has a child and that will be the image **image: AssetImage** widget that is restaurant image URL , save we see that the image now is able to go underneath the status bar.
Now set the height  and width of our image, height: 220.0
And then to increase the width we will do width: **MediaQuery.of(context).size.width,**  and that's
going to equal the width of our screen no matter what size it is. If we save we see that the image is in the center and to make it expand to our side add **fit: BoxFit.cover**.

Now let's add the two buttons up on the top.

```dart
Padding(
      padding: const EdgeInsets.symmetric(
        horizontal: 20.0,
        vertical: 20.0,
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          IconButton(
              icon: Icon(Icons.arrow_back_ios),
              color: Colors.white,
              iconSize: 30.0,
              onPressed: () => Navigator.pop(context)),
          IconButton(
              icon: Icon(Icons.favorite),
              color: Theme.of(context).primaryColor,
              iconSize: 35.0,
              onPressed: () {})
        ],
      ),
    )
```

So the back button and the favorite button to do that will go right underneath our image widget and then we will add a row widget and this road it's going to have to icon buttons icon button icon icon icons dot arrow back Iowa's will set the color to colors that way and the icon size will be thirty point oh and don't create our own pressed because we need on pressed to activate navigator that pop context and that's going to pop our screen away so it's safe and we see that the icons up here and out are the second icon button copy paste that icons dot favorite and then the color instead of doing colors that way we use theme that of context our primary color and it's safe and let's increase the icon size by a little bit and for the on press method of our favorite button we can remove navigator wrap pop and then have empty curly braces if you were adding functionality to the app you can add favorite functionality right here inside the oppressed and then let's add main axis alignment main axis alignment that space between so the icon separate from each other and stick to the side of the screen and then lastly to add some padding edge and that's dot symmetric horizontal twenty point 0 vertical fifty point oh let's save now if we click back we see the screen sideways back and then favorite doesn't do anything

### Animation - Hero

Add a hero animation when we click on any of the restaurants from home screen

here for example this one the image is actually going to animate and expand into this image here so what we have to do is wrap our image here with a new widget called hero and then hero requires a tag which is basically an identifier.

**restaurant.dart**

```dart
Stack(
      children: [
        Hero(
          tag: widget.restaurant.imageUrl,
          child: Image(
            height: 220.0,
```

So the app knows which image to animate to the image in the screen and the tag here will be widget dot restaurant that image URL because our image aerials are all unique.

home_screen.dart

```dart
child: Row(
    children: [
      ClipRRect(
        borderRadius: BorderRadius.circular(15.0),
        child: Hero(
          tag: restaurant.imageUrl,
          child: Image(
            height: 150.0,
```

Let's copy that reformat and then in the home screen where we do build restaurants we need to wrap the image here in a hero widget hero and then add the tag for a restaurant the image url and it save so if we look at our data that our file we can see that the image URL they're all unique to each of these restaurants and thus we can use it to identify the image that we're trying to animate.
Now if we click back we see the image just shrunk down into the original image.

But if we click that and image back into its original position now let's finish up this section of the
restaurant screen.

```dart
Padding(
    padding: const EdgeInsets.all(20.0),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              widget.restaurant.name,
              style: TextStyle(
                fontSize: 22.0,
                fontWeight: FontWeight.w600,
              ),
            ),
            Text(
              '0.2 miles away',
              style: TextStyle(
                fontSize: 18.0,
              ),
            )
          ],
        ),
        RatingStars(widget.restaurant.rating),
        SizedBox(height: 6.0),
        Text(
          widget.restaurant.address,
          style: TextStyle(
            fontSize: 18.0,
          ),
        ),
      ],
    ),
  )
```

Now let's add the two buttons at the bottom so reviews and contact

```dart
Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        FlatButton(
          padding: EdgeInsets.symmetric(horizontal: 30.0),
          color: Theme.of(context).primaryColor,
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(10.0)),
          onPressed: () {},
          child: Text(
            'Reviews',
            style: TextStyle(
              color: Colors.white,
              fontSize: 20.0,
            ),
          ),
        ),
        FlatButton(
          padding: EdgeInsets.symmetric(horizontal: 30.0),
          color: Theme.of(context).primaryColor,
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(10.0)),
          onPressed: () {},
          child: Text(
            'Contact',
            style: TextStyle(
              color: Colors.white,
              fontSize: 20.0,
            ),
          ),
        )
      ],
    ),
```

Add widget row children - first child will be a flat button the slide button was **EdgeInsets.symmetric(horizontal: 30.0) ,** After that we'll set the color to theme out of context dot primary color which is the deep orange color and then once that the shape of our flap on and in this case we wanted to be slightly rounded so the shape will be rounded rectangle border border radius border radius dot circular ten point 0 and then we just need the child text reviews style textile color colors that way and the font size will set that to twenty point so that it's safe.
And the reason the buttons aren't showing up is because we need to add the oppressed method at the bottom on pressed and we'll leave it empty.
Now we have our first button here.
Let's copy paste this and put it right or neither flap on this time we'll call it contact
it save.
Now we have our other button to add the spacing between them all do is main axis alignment and this time we're gonna use main axis alignment dot space evenly and that's an input even spacing between our buttons and the leading and trailing portion of the screen.

## Food Menu items

```dart
//Food menu
SizedBox(height: 10.0),
Center(
  child: Text(
    'Menu',
    style: TextStyle(
        fontSize: 22.0,
        fontWeight: FontWeight.w600,
        letterSpacing: 1.2),
  ),
),
SizedBox(height: 10.0),
Expanded(
  child: GridView.count(
    padding: EdgeInsets.all(10.0),
    crossAxisCount: 2,
    children: List.generate(widget.restaurant.menu.length, (index) {
      Food food = widget.restaurant.menu[index];
      return _buildMenuItem(food);
    }),
  ),
)
```

grid view to display the menu items **_buildMenuItem(food)** write a private function and it all in food menu item

```dart
_buildMenuItem(Food menuItem) {
    return Center(
      child: Stack(
        alignment: Alignment.center,
        children: [
          Container(
            height: 175,
            width: 175,
            decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage(menuItem.imageUrl),
                  fit: BoxFit.cover,
                ),
                borderRadius: BorderRadius.circular(15.0)),
          ),
          //gradient
          **Container(
            height: 175,
            width: 175,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(15.0),
              gradient: LinearGradient(
                begin: Alignment.topRight,
                end: Alignment.bottomLeft,
                colors: [
                  Colors.black.withOpacity(0.3),
                  Colors.black87.withOpacity(0.3),
                  Colors.black54.withOpacity(0.3),
                  Colors.black38.withOpacity(0.3),
                ],
                stops: [0.1, 0.4, 0.6, 0.9],
              ),
            ),
          ),**
          Positioned(
            bottom: 65.0,
            child: Column(
              children: [
                Text(
                  menuItem.name,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 24.0,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 1.2,
                  ),
                ),
                Text(
                  '\$${menuItem.price}',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18.0,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 1.2,
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            bottom: 10.0,
            right: 10.0,
            child: Container(
              decoration: BoxDecoration(
                color: Theme.of(context).primaryColor,
                borderRadius: BorderRadius.circular(30.0),
              ),
              child: IconButton(
                icon: Icon(Icons.add),
                iconSize: 30.0,
                color: Colors.white,
                onPressed: () {},
              ),
            ),
          ),
        ],
      ),
    );
  }
```

**restaurant_screen.dart**

```dart
import 'package:flutter/material.dart';
import 'package:food_delivery/models/food.dart';
import 'package:food_delivery/models/restaurant.dart';
import 'package:food_delivery/widgets/rating_stars.dart';

class RestaurantScreen extends StatefulWidget {
  final Restaurant restaurant;
  RestaurantScreen({this.restaurant});

  @override
  _RestaurantScreenState createState() => _RestaurantScreenState();
}

class _RestaurantScreenState extends State<RestaurantScreen> {
  _buildMenuItem(Food menuItem) {
    return Center(
      child: Stack(
        alignment: Alignment.center,
        children: [
          Container(
            height: 175,
            width: 175,
            decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage(menuItem.imageUrl),
                  fit: BoxFit.cover,
                ),
                borderRadius: BorderRadius.circular(15.0)),
          ),
          //gradient
          Container(
            height: 175,
            width: 175,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(15.0),
              gradient: LinearGradient(
                begin: Alignment.topRight,
                end: Alignment.bottomLeft,
                colors: [
                  Colors.black.withOpacity(0.3),
                  Colors.black87.withOpacity(0.3),
                  Colors.black54.withOpacity(0.3),
                  Colors.black38.withOpacity(0.3),
                ],
                stops: [0.1, 0.4, 0.6, 0.9],
              ),
            ),
          ),
          Positioned(
            bottom: 65.0,
            child: Column(
              children: [
                Text(
                  menuItem.name,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 24.0,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 1.2,
                  ),
                ),
                Text(
                  '\$${menuItem.price}',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18.0,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 1.2,
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            bottom: 10.0,
            right: 10.0,
            child: Container(
              decoration: BoxDecoration(
                color: Theme.of(context).primaryColor,
                borderRadius: BorderRadius.circular(30.0),
              ),
              child: IconButton(
                icon: Icon(Icons.add),
                iconSize: 30.0,
                color: Colors.white,
                onPressed: () {},
              ),
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Stack(
            children: [
              Hero(
                tag: widget.restaurant.imageUrl,
                child: Image(
                  height: 220.0,
                  width: MediaQuery.of(context).size.width,
                  image: AssetImage(widget.restaurant.imageUrl),
                  fit: BoxFit.cover,
                ),
              ),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 20.0, vertical: 50.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    IconButton(
                        icon: Icon(Icons.arrow_back_ios),
                        color: Colors.white,
                        iconSize: 30.0,
                        onPressed: () => Navigator.pop(context)),
                    IconButton(
                        icon: Icon(Icons.favorite),
                        color: Theme.of(context).primaryColor,
                        iconSize: 35.0,
                        onPressed: () {})
                  ],
                ),
              ),
            ],
          ),
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      widget.restaurant.name,
                      style: TextStyle(
                        fontSize: 22.0,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                    Text(
                      '0.2 miles away',
                      style: TextStyle(
                        fontSize: 18.0,
                      ),
                    )
                  ],
                ),
                RatingStars(widget.restaurant.rating),
                SizedBox(height: 6.0),
                Text(
                  widget.restaurant.address,
                  style: TextStyle(
                    fontSize: 18.0,
                  ),
                ),
              ],
            ),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              FlatButton(
                padding: EdgeInsets.symmetric(horizontal: 30.0),
                color: Theme.of(context).primaryColor,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0)),
                onPressed: () {},
                child: Text(
                  'Reviews',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20.0,
                  ),
                ),
              ),
              FlatButton(
                padding: EdgeInsets.symmetric(horizontal: 30.0),
                color: Theme.of(context).primaryColor,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0)),
                onPressed: () {},
                child: Text(
                  'Contact',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20.0,
                  ),
                ),
              )
            ],
          ),
          //Food menu
          SizedBox(height: 10.0),
          Center(
            child: Text(
              'Menu',
              style: TextStyle(
                  fontSize: 22.0,
                  fontWeight: FontWeight.w600,
                  letterSpacing: 1.2),
            ),
          ),
          SizedBox(height: 10.0),
          Expanded(
            child: GridView.count(
              padding: EdgeInsets.all(10.0),
              crossAxisCount: 2,
              children: List.generate(widget.restaurant.menu.length, (index) {
                Food food = widget.restaurant.menu[index];
                return _buildMenuItem(food);
              }),
            ),
          )
        ],
      ),
    );
  }
}
```

## Cart screen

![Food%20Delivery%20Flutter%20Workshop%2079e4cc0958e84e96900d70985520538c/Untitled%206.png]images/chatapp/Untitled%206.png)

**home_screen.dart**

```dart
FlatButton(
    onPressed: () => Navigator.push(
      context,
      MaterialPageRoute(builder: (_) => CartScreen()),
    ),
    child: Text(
      'Cart (${currentUser.cart.length})',
```

Let's work on implementing the cart screen so let's go back to home screen
look for the action in our upper and here we say we have the court with the current user court at length and the oppressed.
We want our navigator navigator.

Create the **cart_Screen.dart** under these **screens** directory,  we're going to make a state widget  **CartScreen ,** Import material.dart and then for the build method we will return a Scaffold and remember to import it in home_screen.dart
Now if we click on cart we're going to segway to the screen and we can add the AppBar

**appBar: AppBar(title:Text('Cart (${currentUser.cart.length})')),**
Text and here we're going to do the same thing as the action button.
So it's **currentUser.cart.length}**and pace slide in as our title
current users from our data that our file into import that here it's safe.

**cart_Screen.dart**

```dart
import 'package:flutter/material.dart';
import 'package:food_delivery/data/data.dart';
import 'package:food_delivery/models/order.dart';

class CartScreen extends StatefulWidget {
  @override
  _CartScreenState createState() => _CartScreenState();
}

class _CartScreenState extends State<CartScreen> {
  _buildCartItem(Order order) {
    return Container(
      padding: EdgeInsets.all(20.0),
      height: 170,
      child: Row(
        children: [
          Expanded(
            child: Row(
              children: [
                Container(
                  width: 150,
                  decoration: BoxDecoration(
                      image: DecorationImage(
                        image: AssetImage(order.food.imageUrl),
                        fit: BoxFit.cover,
                      ),
                      borderRadius: BorderRadius.circular(15.0)),
                ),
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(12),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          order.food.name,
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.bold,
                          ),
                          overflow: TextOverflow.ellipsis,
                        ),
                        SizedBox(height: 10.0),
                        Text(
                          order.restaurant.name,
                          style: TextStyle(
                            fontSize: 16.0,
                            fontWeight: FontWeight.w600,
                          ),
                          overflow: TextOverflow.ellipsis,
                        ),
                        SizedBox(height: 10.0),
                        Container(
                          width: 100,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(10),
                            border: Border.all(
                              width: 0.8,
                              color: Colors.black54,
                            ),
                          ),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              GestureDetector(
                                onTap: () {},
                                child: Text(
                                  '-',
                                  style: TextStyle(
                                    color: Theme.of(context).primaryColor,
                                    fontSize: 20.0,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ),
                              SizedBox(width: 20),
                              Text(
                                order.quantity.toString(),
                                style: TextStyle(
                                  fontSize: 20.0,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                              SizedBox(width: 20),
                              GestureDetector(
                                onTap: () {},
                                child: Text(
                                  '+',
                                  style: TextStyle(
                                    color: Theme.of(context).primaryColor,
                                    fontSize: 20.0,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        )
                      ],
                    ),
                  ),
                )
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.all(10),
            child: Text(
              '\$${order.quantity * order.food.price}',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Cart (${currentUser.cart.length})')),
      body: ListView.separated(
        itemBuilder: (BuildContext context, int index) {
          Order order = currentUser.cart[index];
          return _buildCartItem(order);
        },
        separatorBuilder: (BuildContext context, int index) {
          return Divider(
            height: 1.0,
            color: Colors.grey,
          );
        },
        itemCount: currentUser.cart.length,
      ),
    );
  }
}
```

## Checkout

![Food%20Delivery%20Flutter%20Workshop%2079e4cc0958e84e96900d70985520538c/Untitled%207.png]images/chatapp/Untitled%207.png)

```dart
@override
  Widget build(BuildContext context) {
    **double totalPrice = 0;
    currentUser.cart.forEach(
      (Order order) => totalPrice += order.quantity * order.food.price,
    );**

    return Scaffold(
      appBar: AppBar(
        title: Text('Cart (${currentUser.cart.length})'),
      ),
      body: ListView.separated(
        itemCount: currentUser.cart.length + 1,
        itemBuilder: (BuildContext context, int index) {
          **if (index < currentUser.cart.length) {
            Order order = currentUser.cart[index];
            return _buildCartItem(order);
          }
          return Padding(
            padding: EdgeInsets.all(20.0),
            child: Column(
              children: <Widget>[
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Text(
                      'Estimated Delivery Time:',
                      style: TextStyle(
                        fontSize: 20.0,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                    Text(
                      '25 min',
                      style: TextStyle(
                        fontSize: 20.0,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 10.0),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Text(
                      'Total Cost:',
                      style: TextStyle(
                        fontSize: 20.0,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                    Text(
                      '\$${totalPrice.toStringAsFixed(2)}',
                      style: TextStyle(
                        color: Colors.green[700],
                        fontSize: 20.0,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 80.0),
              ],
            ),**
          );
        },
        separatorBuilder: (BuildContext context, int index) {
          return Divider(
            height: 1.0,
            color: Colors.grey,
          );
        },
      ),
      **bottomSheet: Container(
        height: 100.0,
        width: MediaQuery.of(context).size.width,
        decoration: BoxDecoration(
          color: Theme.of(context).primaryColor,
          boxShadow: [
            BoxShadow(
              color: Colors.black26,
              offset: Offset(0, -1),
              blurRadius: 6.0,
            ),
          ],
        ),
        child: Center(
          child: FlatButton(
            child: Text(
              'CHECKOUT',
              style: TextStyle(
                color: Colors.white,
                fontSize: 22.0,
                fontWeight: FontWeight.bold,
                letterSpacing: 2.0,
              ),
            ),
            onPressed: () {},
          ),
        ),
      ),**
    );
  }
```

## User Login / Register

![Food%20Delivery%20Flutter%20Workshop%2079e4cc0958e84e96900d70985520538c/Untitled%208.png]images/chatapp/Untitled%208.png)

Create a new widget custom_drawer.dart

```dart
import 'package:flutter/material.dart';
import 'package:food_delivery/data/data.dart';
import 'package:food_delivery/screens/home_screen.dart';

class CustomDrawer extends StatelessWidget {
  _buildDrawerOption(Icon icon, String title, Function onTap) {
    return ListTile(
      leading: icon,
      title: Text(
        title,
        style: TextStyle(fontSize: 20.0),
      ),
      onTap: onTap,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Column(
        children: <Widget>[
          Stack(
            children: <Widget>[
              Image(
                height: 200.0,
                width: double.infinity,
                image: AssetImage(
                  'assets/images/login_background.jpg',
                ),
                fit: BoxFit.cover,
              ),
              Positioned(
                  bottom: 20.0,
                  left: 20.0,
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: <Widget>[
                      Container(
                        height: 100.0,
                        width: 100.0,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          border: Border.all(
                              width: 3.0,
                              color: Theme.of(context).primaryColor),
                        ),
                        child: ClipOval(
                          child: Image(
                            image: AssetImage(
                              currentUser.profileImageUrl,
                            ),
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                      SizedBox(width: 6.0),
                      Text(
                        currentUser.name,
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 25.0,
                          fontWeight: FontWeight.bold,
                          letterSpacing: 1.5,
                        ),
                      ),
                    ],
                  ))
            ],
          ),
          _buildDrawerOption(
            Icon(Icons.home),
            'Home',
            () => Navigator.pushReplacement(
              context,
              MaterialPageRoute(
                builder: (_) => HomeScreen(),
              ),
            ),
          ),
          _buildDrawerOption(
            Icon(Icons.list_outlined),
            'Your Orders',
            () => Navigator.pushReplacement(
              context,
              MaterialPageRoute(
                builder: (_) => HomeScreen(),
              ),
            ),
          ),
          _buildDrawerOption(
            Icon(Icons.favorite),
            'Favorite',
            () => Navigator.pushReplacement(
              context,
              MaterialPageRoute(
                builder: (_) => HomeScreen(),
              ),
            ),
          ),
          _buildDrawerOption(
            Icon(Icons.account_circle),
            'Your Profile',
            () => Navigator.pushReplacement(
              context,
              MaterialPageRoute(
                builder: (_) => HomeScreen(),
              ),
            ),
          ),
          _buildDrawerOption(
            Icon(Icons.settings),
            'Settings',
            () => Navigator.pushReplacement(
              context,
              MaterialPageRoute(
                builder: (_) => HomeScreen(),
              ),
            ),
          ),
          Expanded(
              child: Align(
            alignment: FractionalOffset.bottomCenter,
            child: _buildDrawerOption(
              Icon(currentUser.isLoggedIn ? Icons.directions_run : Icons.login),
              currentUser.isLoggedIn ? 'Logout' : 'Login',
              () => Navigator.pushReplacement(
                context,
                MaterialPageRoute(
                  builder: (_) => HomeScreen(),
                ),
              ),
            ),
          ))
        ],
      ),
    );
  }
}
```

Update the user model usermodel.dart

```dart
import 'order.dart';

class User {
  final String name;
  final bool isLoggedIn;
  final String profileImageUrl;
  final List<Order> orders;
  final List<Order> cart;

  User({
    this.name,
    this.isLoggedIn,
    this.profileImageUrl,
    this.orders,
    this.cart,
  });
}
```

Update data.dart

```dart
// User
final currentUser = User(
  profileImageUrl: 'assets/images/user.jpg',
  isLoggedIn: false,
  name: 'Sam',
```

Update home_screen.dart to use the new drawer

```dart
			), //Appbar
      **drawer: CustomDrawer(),**
      body: ListView(
```

and **remove icon button**

```dart
A**ppBar(
        leading: IconButton(
          icon: Icon(Icons.account_circle),
          iconSize: 30.0,
          onPressed: null,
        ),**
```

there are 2 new asset images. user.jpg and login_background.jpg

### Forms

Create a screen of Login and registration, create new file under **screens** folder -**login_screen.dart**

![Food%20Delivery%20Flutter%20Workshop%2079e4cc0958e84e96900d70985520538c/Untitled%209.png]images/chatapp/Untitled%209.png)

![Food%20Delivery%20Flutter%20Workshop%2079e4cc0958e84e96900d70985520538c/Untitled%2010.png]images/chatapp/Untitled%2010.png)

login_screen.dart

```dart
import 'package:flutter/material.dart';
import 'package:food_delivery/helpers/style.dart';

import 'registration_screen.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _key = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _key,
      backgroundColor: white,
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            SizedBox(
              height: 20,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Image.asset(
                  "assets/images/lg.png",
                  width: 240,
                  height: 240,
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.all(12),
              child: Container(
                decoration: BoxDecoration(
                    border: Border.all(color: grey),
                    borderRadius: BorderRadius.circular(15)),
                child: Padding(
                  padding: EdgeInsets.only(left: 10),
                  child: TextFormField(
                    decoration: InputDecoration(
                        border: InputBorder.none,
                        hintText: "Email",
                        icon: Icon(Icons.email)),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(12),
              child: Container(
                decoration: BoxDecoration(
                    border: Border.all(color: grey),
                    borderRadius: BorderRadius.circular(15)),
                child: Padding(
                  padding: EdgeInsets.only(left: 10),
                  child: TextFormField(
                    decoration: InputDecoration(
                        border: InputBorder.none,
                        hintText: "Password",
                        icon: Icon(Icons.lock)),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(10),
              child: GestureDetector(
                child: Container(
                  decoration: BoxDecoration(
                      color: red,
                      border: Border.all(color: grey),
                      borderRadius: BorderRadius.circular(15)),
                  child: Padding(
                    padding: EdgeInsets.only(top: 10, bottom: 10),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Text("Login",
                            style: TextStyle(fontSize: 22, color: white))
                      ],
                    ),
                  ),
                ),
              ),
            ),
            GestureDetector(
              onTap: () {
                Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => RegistrationScreen()));
              },
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                    "Register",
                    style: TextStyle(fontSize: 20),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

**registration_screen.dart**

```dart
import 'package:flutter/material.dart';
import 'package:food_delivery/helpers/style.dart';
import 'package:food_delivery/screens/home_screen.dart';

import 'login_screen.dart';

class RegistrationScreen extends StatefulWidget {
  @override
  _RegistrationScreenState createState() => _RegistrationScreenState();
}

class _RegistrationScreenState extends State<RegistrationScreen> {
  final _key = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _key,
      backgroundColor: white,
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            SizedBox(
              height: 20,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Image.asset(
                  "assets/images/lg.png",
                  width: 240,
                  height: 240,
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.all(12),
              child: Container(
                decoration: BoxDecoration(
                    border: Border.all(color: grey),
                    borderRadius: BorderRadius.circular(15)),
                child: Padding(
                  padding: EdgeInsets.only(left: 10),
                  child: TextFormField(
                    decoration: InputDecoration(
                        border: InputBorder.none,
                        hintText: "Username",
                        icon: Icon(Icons.person)),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(12),
              child: Container(
                decoration: BoxDecoration(
                    border: Border.all(color: grey),
                    borderRadius: BorderRadius.circular(15)),
                child: Padding(
                  padding: EdgeInsets.only(left: 10),
                  child: TextFormField(
                    decoration: InputDecoration(
                        border: InputBorder.none,
                        hintText: "Emails",
                        icon: Icon(Icons.email)),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(12),
              child: Container(
                decoration: BoxDecoration(
                    border: Border.all(color: grey),
                    borderRadius: BorderRadius.circular(15)),
                child: Padding(
                  padding: EdgeInsets.only(left: 10),
                  child: TextFormField(
                    decoration: InputDecoration(
                        border: InputBorder.none,
                        hintText: "Password",
                        icon: Icon(Icons.lock)),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(10),
              child: GestureDetector(
                onTap: () async {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => HomeScreen()));
                },
                child: Container(
                  decoration: BoxDecoration(
                      color: red,
                      border: Border.all(color: grey),
                      borderRadius: BorderRadius.circular(15)),
                  child: Padding(
                    padding: EdgeInsets.only(top: 10, bottom: 10),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Text(
                          "Register",
                          style: TextStyle(
                            fontSize: 22,
                            color: white,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
            GestureDetector(
              onTap: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => LoginScreen()));
              },
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                    "login",
                    style: TextStyle(fontSize: 20),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

## Setting up Firebase

[Firebase Auth Connection]images/chatapp/Firebase%20Auth%20Connection%20b29f1315409d4df981c820d2e0d2ac14.md)

## User Auth

[Firebase User Login and Registration]images/chatapp/Firebase%20User%20Login%20and%20Registration%20e56edee60b9d481aaac274d5ba6c7f4c.md)

## Restaurant Data from Firebase firestore

[Restaurant Data from Firebase firestore]images/chatapp/Restaurant%20Data%20from%20Firebase%20firestore%2067c1eac8c2c94bf995e7fa068d7521a9.md)

### Adding Food to the menu

[Adding food to the menu]images/chatapp/Adding%20food%20to%20the%20menu%207d31cb14d523474f876e3b6218c5bf2e.md)

Cart Checkout and Orders
