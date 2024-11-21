+++
date = '2024-11-14T19:51:57+05:30'
draft = false
title = 'Saying Hello to the World With Golang'
description = ""
image = "/images/go.webp"
largeImage = "/images/go.webp"
tags = ["go-series","golang"]
+++

In this blog, we will

* Install Go (if you haven't already)

* Say Hello to the World

* Use Go commands to run our code

* Learn about packages and imports in Go

* Learn about exported names

## Install Go

Use the [Download and Install](https://go.dev/doc/install) steps.

Verify that you've installed Go by opening a command prompt and typing the following command:

```shell
go version
```

Confirm that the command prints the installed version of Go. For me, it's `go1.22.1`

```shell
go version go1.22.1 darwin/amd64
```

## Hello World

* Create `hello` a directory for Go source code

```shell
mkdir hello
cd hello
```

* Enable dependency tracking for your code

When you write code and need to use packages from other sources, like libraries, you keep track of these connections using a file called go.mod. This file stays with your code and helps manage which packages your code relies on.

To set up this dependency tracking, you create a go.mod file by running the command `go mod init` followed by the name you want to give to your code's module. This name is often based on where your code is stored, like a repository location such as `github.com/mymodule`. If you plan to share your code with others, this name needs to be a place where Go Tools can find and download your code.

We will use example/hello

```shell
$ go mod init example/hello
go: creating new go.mod: module example/hello
```

* Create a file, hello.go in which to write your code

* Paste the following code into your hello.go file and save the file

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

Package: a package is a way to group functions, and it's made up of all the files in the same directory

fmt package: This package is one of the [standard library packages you got](https://pkg.go.dev/std) when you installed Go. which contains functions for formatting text, including printing to the console.

main function: A main function to print a message to the console. A main function executes by default when you run the main package.

* Run the code to say Hello to the world

```shell
% go run .
Hello, World!
```

Congratulations! We have successfully said hello to the world.


## Packages & Imports

Every Go program is made up of packages. Programs start running in package `main`.

```go
package main

import (
    "fmt"
    "math/rand"
)

func main() {
    fmt.Println("My favorite number is", rand.Intn(10))
}
```

This program uses packages with import paths `"fmt"` and `"math/rand"`.

By convention, the package name is the same as the last element of the import path. For instance, the `"math/rand"` package comprises files that begin with the statement `package rand`.

This code groups the imports into a parenthesized, "factored" import statement.

You can also write multiple import statements, like:

```go
import "fmt"
import "math/rand"
```

But it is good style to use the factored import statement.

## Exported names

In Go, a name is exported if it begins with a capital letter. For example, `Pi`, is exported from the `math` package.

When importing a package, you can refer only to its exported names. Any "unexported" names are not accessible from outside the package.

```go
package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Println(math.pi)
}
```

There is an error in the above code. To fix the error, rename the `math.pi` to `math.Pi`.

## See you soon!

Thanks for joining our journey to learn Go (Golang)! In our next blog, we'll dive deeper into Go programming essentials. Stay tuned for more exciting learning adventures!






