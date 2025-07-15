+++
date = '2024-12-22T02:20:05+05:30'
draft = false
title = 'Functions and Loops in Golang'
summary = "In programming, functions and loops are fundamental concepts used to structure and control the flow of execution."
tags = ["go-series","golang"]
categories = ["Programming"]
ShowToc = true
[cover]
image = "images/golang.jpg"
hiddenInList = true
alt = "Could not load image"
+++

We have already seen `functions` and used them, but let's just get a refresher of them quickly.

```go
package main

import "fmt"

func add(x, y int) (int, int) {
    return x + y, x - y
}

func main() {
    fmt.Println(add(2, 2))
}

```

- a function can take one or more arguments. Here, `add()` takes two parameters of type int.

- Also, as you can see, both parameters share the same type. Hence, we have omitted the first parameter `a`'s type and kept the last one.

- A function can return any number of results. as `add()` function returns two results with type `(int, int)`

```shell
▶ go run ./functions.go
4 0
```

### Named return values

Go's return values may be named. If so, they are treated as variables defined at the top of the function.

A `return` statement without arguments returns the named return values. This is known as a "naked" return.

```go
package main

import "fmt"

func get() (x, y int) {
    x = 2
    y = 2
    return
}

func main(){
    fmt.Println(get())
}

```

which automatically returns x and y.

```shell
▶ go run ./naked.go    
2 2
```

### For

Go has only one looping construct, the `for` loop. The basic `for` loop has three components separated by semicolons:

```
for INITIAL; CONDITION; AFTER {

... ... ...

}
```

The `init` statement executes before the first iteration. `condition` statement executes before every iteration. And `post/after` statement executes at the end of every iteration.

```go
package main

import "fmt"

func main() {
    sum := 0
    for i := 0; i < 5; i++ {
        sum += i
    }
    fmt.Println(sum)
}

```

The `init` and `post` statements are optional.

```go
package main

import "fmt"

func main() {
    sum := 1
    for ; sum < 10; {
        sum += sum
    }
    fmt.Println(sum)
}

```

### For is go's while loop

You can just drop the semicolons.

```go
package main

import "fmt"

func main() {
    sum := 1
    for sum < 10 {
        sum += sum
    }
    fmt.Println(sum)
}

```

### if-else

```go
package main

import "fmt"

func main() {
    num := 10

    if num%2 == 0 {
        fmt.Println("The number is even.")
    } else {
        fmt.Println("The number is odd.")
    }
}

```

Variables declared by the statement are only in scope until the end of the `if`. and `else` block.

Let's wrap it up here, In the next blog, we will be looking at switch cases and defer statements.

### See you soon!

Thanks for joining our journey to learn Go (Golang)!