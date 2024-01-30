let circle = {
    radius: 10,
    center: {
        x: 0,
        y: 0
    },
    getRadius: function () {
        return this.radius;
    },
    setRadius: function (radius) {
        this.radius = radius;
    },
    getArea: function () {
        return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    },
    getCenter: function () {
        return this.center;
    },
    setCenter: function (center) {
        this.center.x = center.x;
        this.center.y = center.y;
    },
    grow: function (plus) {
        this.radius += plus;
    },
    shrink: function (minus) {
        this.radius -= minus;
    },
    printDetails: function () {
        console.log(`Radius: ${this.radius}`);
        console.log(`Center: ${this.center.x}, ${this.center.y}`);
        console.log(`Area: ${this.getArea()}`);
        console.log(`Perimeter: ${this.getPerimeter()}`);
    }
}

circle.setRadius(11);
circle.setCenter({ x: 3, y: 3 });
circle.printDetails();

