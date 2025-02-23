+++
date = '2025-02-23T14:35:40+05:30'
draft = false
title = 'Arrays and Slices'
description = ""
image = "/images/go.webp"
largeImage = "/images/go.webp"
tags = ["go-series","golang"]
+++

In our previous learning, we have discussed switch and defer statements. Here we will be looking into `Arrays` and `Slices`.

We already know what arrays are, but let’s just quickly reexamine what their definition is.

**An array is a linear data structure where all the elements are arranged sequentially. Stored at contiguous memory locations.**

### **Is the array always of a fixed size?**


At core, arrays are fixed size only, but most of the languages provide dynamic-sized arrays using underlined fixed arrays. For example, Java has ArrayList, and Python has lists.


### **Arrays in Go**


In Go we have fixed-size arrays. Let’s define an array.


```go
package main

import "fmt"

func main() {

	// var myInts [10]int

	primes := [6]int{2, 3, 5, 7, 11, 13}

	fmt.Println(primes)
}
```

```bash
% go run arrays.go 
[2 3 5 7 11 13]
```


### **Slices**


Slices are like references to arrays. A slice does not store any data; it just describes a section of an underlying array. In practice, slices are much more common than arrays.

A slice is formed by specifying two indices, a low and high bound separated by a colon. From which the lower side includes the first element and the higher side excludes the last element.


```go
package main

import "fmt"

func main() {

	a := [5]int{4, 6, 2, 7, 8}
	var slice []int = a[1:3]

	fmt.Println(slice)

}
```

```bash
% go run slices.go 
[6 2]
```


Changing the elements of a slice modifies the corresponding elements of its underlying array.


```go
package main

import "fmt"

func main() {

	a := [5]int{1, 2, 3, 4, 5}

	s1 := a[:3]
	s2 := a[3:]

	fmt.Println(s1, s2)

	s2[0] = 0
	fmt.Println(s1, s2)
	fmt.Println(a)

}
```

```bash
go run slices.go
[1 2 3] [4 5]
[1 2 3] [0 5]
[1 2 3 0 5]
```


A slice has both a length and a capacity. The length of a slice is the number of elements it contains. The capacity of a slice is the number of elements in the underlying array, counting from the first element in the slice.

You can extend a slice's length by re-slicing it, provided it has sufficient capacity.


```go
package main

import "fmt"

func main() {

	a := []int{1, 2, 3, 4, 5}

	s1 := a[:2]
	fmt.Printf("For a len=%d cap=%d\n", len(a), cap(a))
	fmt.Printf("For s1 len=%d cap=%d\n", len(s1), cap(s1))

	s1 = a[:4]
	fmt.Printf("Extended len=%d cap=%d\n", len(s1), cap(s1))

	s1 = a[3:]
	fmt.Printf("Dropped len=%d cap=%d\n", len(s1), cap(s1))
}
```

```bash
% go run slices.go
For a len=5 cap=5
For s1 len=2 cap=5
Extended len=4 cap=5
Dropped len=2 cap=2
```


### Nil Slices


The zero value of a slice is `nil`. A nil slice has a length and capacity of 0 and has no underlying array.


```go
package main

import "fmt"

func main() {
	var s []int
	fmt.Println(s, len(s), cap(s))
	if s == nil {
		fmt.Println("nil!")
	}
}
```

```powershell
go run .\nil_slice.go
[] 0 0
nil!
```


### Create slices with Make


We can create slices with built-in `make` function. and it’s a way to create dynamically-sized arrays. When we use the make function to create a slice, it allocates the zeroed value array and returns a slice that refers to that zeroed value array.


```go
package main

import "fmt"

func main() {

	a := make([]int, 3)
	fmt.Printf("%v len=%d cap=%d \n", a, len(a), cap(a))

	// We can specify capacity in third parameter
	b := make([]string, 3, 5)
	fmt.Printf("%v len=%d cap=%d", b, len(b), cap(b))
}
```

```powershell
go run .\make_slice.go
[0 0 0] len=3 cap=3 
[  ] len=3 cap=5
```


If we want to create a slice with a specific set of values, we can use a slice literal.


```go
mySlice := []string {"I","love","Golang"}
```


### Appending new elements to a slice


Go also provides a built-in `append` function to append new elements to a slice. If array is too small to fit all the given values a bigger array gets allocated and slice will point to the newly allocated array.


```go
package main

import (
	"fmt"
)

func main() {
	var a []int
	fmt.Printf("%v \n", a)

	// Slice grows as needed
	a = append(a, 1)
	fmt.Printf("%v \n", a)

	// We can add multiple values
	a = append(a, 2, 3, 4)
	fmt.Printf("%v \n", a)
}
```

```powershell
go run .\slice_append.go
[] 
[1] 
[1 2 3 4]
```


I guess we will wrap it up here. Stay tuned for the next learnings.


### See you soon!


Thanks for joining our journey to learn Go (Golang)! In our next blog, we'll dive deeper into Go programming essentials. Stay tuned for more exciting learning adventures! Don't forget to subscribe to our newsletter for updates.