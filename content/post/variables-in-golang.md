+++
date = '2024-12-03T17:38:01+05:30'
draft = false
summary = "In programming, a variable is a named storage location in a computer's memory that holds a value. "
title = 'Variables in Golang'
tags = ["go-series","golang"]
categories = ["Programming"]
ShowToc = true
[cover]
image = "images/golang.jpg"
hiddenInList = true
alt = "Could not load image"
+++

As we have already said hello to the world, now we can start with our basic learning. In this blog, we will understand variables and many other things related to variables in Golang.


I know we are all programmers and we already know what variables are, but still, we are learning from zero. Let's just discuss some things about variables in Golang.


* bool

* string

* int int8 int16 int32 int64

* uint uint8 uint16 uint32 uint64

* byte // alias for uint8

* rune // alias for int32

* float32 float64

* complex64 complex128

The size ( 8, 16, 32, 64, etc.) represents how many bits in memory will be used to store the variable. The default `int` and `uint` types refer to respected 32 or 64 sizes, depending on the environment of the user.

```go
package main

import "fmt"

var someNumber int

func main() {

    var someFloat float64
    var isTrue, isFalse bool = true, false
    var name string = "HELLO WORLD"

    fmt.Printf("%v %.2f %v %v %v\n",
        someNumber,
        someFloat,
        isTrue,
        isFalse,
        name,
    )
}
```

The `var` statement declares a list of variables; as in function argument lists, the type is last.

A `var` statement can be at the package or function level. We see both in this example.

Here's a quick look at the output of the code

```shell
go run .\variables.go
0 0.00 true false HELLO WORLD
```

Inside a function, the `:=` short assignment statement can be used in place of a `var` declaration with implicit type.

Outside a function, every statement begins with a keyword (`var`, `func`, and so on) and so the `:=` construct is not available.

```go
package main

import "fmt"

func main() {
    var i, j int = 1, 2
    k := 3
    c, python, java := true, false, "no!"

    fmt.Println(i, j, k, c, python, java)
}
```

```shell
go run .\variables.go
1 2 3 true false no!
```

### Type conversions

The expression `T(v)` converts the value `v` to the type `T`.

```go
package main

import (
    "fmt"
    "math"
)

func main() {
    x, y := 2, 2
    f := math.Sqrt(math.Sqrt(float64(x * y)))
    fmt.Println(f)
}
```

```shell
go run .\conversions.go
1.4142135623730951
```

Unlike in C, in Go assignment between items of different type requires an explicit conversion.

### Type inference

When declaring a variable without specifying an explicit type (either by using the `:=` syntax or `var =` expression syntax), the variable's type is inferred from the value on the right-hand side.

```go
var i int
j := i // j is an int
```

But when the right-hand side contains an untyped numeric constant, the new variable may be of type `int`, `float64`, or `complex128` depending on the precision of the constant:

```go
i := 2 // int
f := 3.14 // float64
g := 0.34 + 0.5i // complex128
```

Example:

```go
package main

import "fmt"

func main() {
    i := 2
    f := 0.5
    b := true
    s := "golang"
    c := 0.5i
    fmt.Printf("%T %T %T %T %T\n", i, f, b, s, c)
}
```

```shell
go run .\type_inference.go
int float64 bool string complex128
```

### Constants

Constants must be known at compile time. They are usually declared with a static value.

You can not declare a constant that can only be computed at run-time. ex.

```text
const time := time.now() // this breaks
```

```go
package main

import "fmt"

const Pi = 3.14

func main() {
    const Hello = "નમસ્તે"
    fmt.Println(Hello, "World")
    fmt.Println(Pi)

    const Truth = true
    fmt.Println("Go rules?", Truth)
}
```

```shell
go run .\constants.go     
નમસ્તે World
3.14
Go rules? true
```

### Passed by value

In Go, variables are passed by value, not passed by reference.

```go
  package main

  import "fmt"

  func inc(x int) {
      x++
  }

  func main() {
      x := 5
      inc(x)
      fmt.Println(x)
  }
```

```shell
go run .\pass_by_value.go
5
```

We will understand this topic in depth once we understand the concept of pointers. Till then, let's focus on the basics.

### See you soon!

Thanks for joining our journey to learn Go (Golang)!