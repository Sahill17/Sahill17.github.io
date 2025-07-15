+++
date = '2025-05-23T22:10:58+05:30'
draft = false
title = 'Maps in Golang'
summary = "In programming, a \"map\" typically refers to a data structure that stores key-value pairs, allowing for efficient retrieval of values based on their associated keys."
tags = ["go-series","golang"]
categories = ["Programming"]
ShowToc = true
[cover]
image = "images/golang.jpg"
hiddenInList = true
alt = "Could not load image"
+++

Yes! Maps in Golang are similar to objects we have in JavaScript, dictionaries we have in Python, and hashes we have in Ruby.

To create a map, let's use the built-in `make`.

```go
package main

import "fmt"

func main() {

	Ages := make(map[string]int)
	fmt.Println(Ages)
	Ages["Key"] = 0
	Ages["Sahil"] = 22
	Ages["Dev"] = 23

	fmt.Println(Ages)

}
```

```shell
% go run maps.go
map[]
map[Dev:23 Key:0 Sahil:22]
```

In Go, maps are inherently unordered — this means that when we print a map, the order of the key-value pairs is not guaranteed and may vary between runs or operations.

If order matters to us, we can use a slice of keys or a struct with a slice.

```go
package main

import "fmt"

func main() {

	Ages := make(map[string]int)
	fmt.Println(Ages)

	keys := []string{"Key", "Sahil", "Dev"}
	Ages["Sahil"], Ages["Dev"] = 22, 23
	for _, k := range keys {
		fmt.Println(k, Ages[k])
	}

}
```

```shell
% go run maps.go   
map[]
Key 0
Sahil 22
Dev 23
```

### Let's mutate maps

Let's create a map without using `make`, and mutate it. We already know how to insert an element or assign a value to a key — check the above example.

Check out the example below with some basic mutations.

```go
package main

import "fmt"

func main() {
	Movies := map[string]string{
		"La La Land": "Damien Chazelle",
		"Whiplash":   "Damien Chazelle",
	}

	// Add a Movie
	Movies["Inglourious basterds"] = "Quentin Tarantino"
	Movies["Fight Club"] = "David Fincher"

	// Ohh shit, First rule
	delete(Movies, "Fight Club")

	// Get director's name
	fmt.Println(Movies["La La Land"])

	// Do we have any Tarantino Movie?
	director, ok := Movies["Inglourious basterds"]
	fmt.Println(director, "made Inglourious basterds?", ok)

}
```

```shell
 % go run maps.go
Damien Chazelle
Quentin Tarantino made Inglourious basterds? true
```

In the above example, we also checked if a key exists or not. If the key is in the map, then the second parameter will be `true`, otherwise it'll be `false`.

Like slices, maps are also passed by reference into functions. This means that when a map is passed into a function we write, we can make changes to the original — we don't have a copy.

Attempting to get a value from a map where the key doesn't exist returns the zero value of its type, but our program doesn't panic.

### Nested maps? Like JSON?

Yep, we can totally do that. Just like in JSON, Go allows us to have maps within maps. This is super handy when we're dealing with structured data.

```go
package main

import "fmt"

func main() {

	movies := map[string]map[string]string{
		"The Shawshank Redemption": {
			"director": "Frank Darabont",
			"year":     "1994",
		},
		"The Godfather": {
			"director": "Francis Ford Coppola",
			"year":     "1972",
		},
		"The Dark Knight": {
			"director": "Christopher Nolan",
			"year":     "2008",
		},
	}

	// Access nested values
	fmt.Println("Director of Shawshank:", movies["The Shawshank Redemption"]["director"])
	fmt.Println("The Godfather released in:", movies["The Godfather"]["year"])

	// Add another movie
	movies["12 Angry Men"] = map[string]string{
		"director": "Sidney Lumet",
		"year":     "1957",
	}

	// Print all movies with their details
	for title, info := range movies {
		fmt.Println(title, "=>", info)
	}
}

```

```shell
% go run maps.go
Director of Shawshank: Frank Darabont
The Godfather released in: 1972
The Shawshank Redemption => map[director:Frank Darabont year:1994]
The Godfather => map[director:Francis Ford Coppola year:1972]
The Dark Knight => map[director:Christopher Nolan year:2008]
12 Angry Men => map[director:Sidney Lumet year:1957]
```

This approach is perfect when your data has layers — think JSON, YAML, or any nested structure you’re working with. You can easily access, update, or extend it.

### See you soon!

Thanks for joining our journey to learn Go (Golang)!