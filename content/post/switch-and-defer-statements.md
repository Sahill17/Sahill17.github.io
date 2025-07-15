+++
date = '2024-12-22T15:51:41+05:30'
draft = false
title = 'Switch and Defer Statements'
summary = "In programming, switch and defer statements are control flow mechanisms with distinct purposes."
tags = ["go-series","golang"]
categories = ["Programming"]
ShowToc = true
[cover]
image = "images/golang.jpg"
hiddenInList = true
alt = "Could not load image"
+++


In our previous learning, we have discussed functions and loops. Here we will be talking about `switch` and `defer` statements. Let's start with switch cases..

Switch statements are a way to compare multiple options and values together. They are similar to if-else statements but are more concise and readable

```go
package main

import "fmt"

func main() {
    var color string
    fmt.Println("What color is the sky??")
    switch fmt.Scan(&color); color {
    case "red":
        fmt.Println("Evening")
    case "blue":
        fmt.Println("Day")
    case "pink":
        fmt.Println("Evening")
    case "black":
        fmt.Println("Night")
    default:
        fmt.Println("Sky is what???")
    }
}

```

Did you notice that the Go `break` statement is not required at the end of a `case`. `break` statement is implicit in Go.

```shell
▶ go run switch.go
What color is the sky??
red
Evening

```

If you _do_ want a `case` to fall through to the next `case`, you can use the `fallthrough` keyword.

```go
package main

import "fmt"

func main() {
    var color string
    fmt.Println("What color is the sky??")
    switch fmt.Scan(&color); color {
    case "blue":
        fmt.Println("Day")
    case "red":
        fallthrough
    case "pink":
        fmt.Println("Evening")
    case "black":
        fmt.Println("Night")
    default:
        fmt.Println("Sky is what???")
    }
}

```

```shell
▶ go run switch.go
What color is the sky??
red
Evening

```

`default` is the case that runs if none of the other cases match.

`switch` with no condition is same as `switch true`

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    t := time.Now()
    switch {
    case t.Hour() < 12:
        fmt.Println("Good morning.")
    case t.Hour() < 17:
        fmt.Println("Good afternoon.")
    default:
        fmt.Println("Good evening.")
    }
}

```

```shell
▶ go run switch.go
Good afternoon.

```

### Defer statement

`defer` keyword allows a function to be executed automatically _just before_ its enclosing function returns. The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.

`deferred functions` are mostly used for clean-up tasks or for closing connections.

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    fmt.Println("You need rest.")
    start := time.Now()
    defer sleeping(start)
    time.Sleep(5 * time.Second)
    fmt.Println("You went to sleep.")
}

func sleeping(sleep time.Time) {
    fmt.Printf("You slpet for %f seconds.", time.Since(sleep).Seconds())
}

```

```shell
▶ go run defer.go
You need rest.
You went to sleep.
You slpet for 5.001066 seconds.

```

### Stacking defer

Deferred function calls are pushed onto a stack. When a function returns, its deferred calls are executed in LIFO (last-in-first-out) order.

```go
package main

import "fmt"

func main() {
    fmt.Println("counting")

    for i := 0; i < 5; i++ {
        defer fmt.Println(i)
    }

    fmt.Println("done")
}

```

```shell
▶ go run stackdefer.go
counting
done
4
3
2
1
0

```

### Evaluation of arguments

The arguments of a deferred function are evaluated when the `defer` statement is executed and not when the actual function call is done. you will understand this better with below example:

```go
package main

import "fmt"

func main() {
    a := 5
    defer inc(a)
    a++
    fmt.Printf("a --> %v\n", a)
}

func inc(a int) {
    fmt.Printf("a -> %v", a)
}

```

```shell
▶ go run defer2.go
a --> 6
a -> 5

```

`defer` statements are not restricted to only functions; you can defer a method as well.

I guess we will wrap it up here. Stay tuned for the next learnings.

### See you soon!

Thanks for joining our journey to learn Go (Golang)!

