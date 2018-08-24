/*
Title: iOS Naming Conventions
Description: Internal conventions for file names, class names, and variable names in the project
*/

# iOS Naming Conventions

Internal conventions for file, class, and variable names in the project.
Taken from [Ray Wenderlich’s Swift Style Guide](https://github.com/raywenderlich/swift-style-guide).

# Table of Contents
- [File Naming](#1.-file-naming)
	- [Class Files](#1.1-class-files)
		- [Special Cases](#1.1.1-special-cases)
		- [Class Naming Rules](#1.1.2-class-naming-rules)
	- [Resource Files](#1.2-resource-files)
		- [Asset Files](#1.2.1-asset-files)
	- [Method Names](#1.3-method-names)
		- [Method Naming Rules](#1.3.1-method-naming-rules)
		- [Method as Delegate](#1.3.2-method-as-delegate)
		- [Method Name Semantic](#1.3.3-method-name-semantic)
		- [Mutating Method Pairs](#1.3.4-mutating-method-pairs)
		- [Boolean Values](#1.3.5-boolean-values)
		- [Markdown](#1.3.6-markdown)
	- [Variable Names](#1.4-variable-names)
		- [Variable Naming Rules](#1.4.1-variable-naming-rules)



## 1. File Naming

### 1.1 Class Files

Class names are written in [UpperCamelCase](http://en.wikipedia.org/wiki/CamelCase).


#### 1.1.1 Special Cases

* Classes that inherit iOS’ UIKit should include its superclass as a suffix of its name while trimming its superclass prefix. Example: `LoginViewController`, `EmptyView`, `GradientButton` instead of `LoginUIViewController`, `EmptyUIView`, `GradientUIButton`.
* Classes with `NS-` as its superclass however, should not contain any suffix in its name. Example: `Engine` instead of `EngineObject`, `Vehicle` instead of `VehicleObject`
* Classes that extend an iOS component, class name must end with `Extension`. Example: `UIButtonExtension`, `LabelExtension`, `UITableViewControllerExtension`.


#### 1.1.2 Class Naming Rules

* Class name should prioritise clarity over brevity. It is more encouraged to have longer but clearer names instead of shorter but ambiguous ones.
* Avoid using abbreviations.
* Using names based on roles, not types.
Example: `ForgetPasswordViewController` instead of `FPassViewController`


### 1.2 Resource Files

Resources file names are written in __lowercase_underscore__.


#### 1.2.1 Asset Files

Naming conventions for assets:

__Icons__
* Icons should have `icon_` prefix. Example: `icon_pencil`, `icon_cross`, `icon_trash_bin`

Icon Types:

| Asset Type                      | Prefix             | Example                      |
|---------------------------------|--------------------|------------------------------|
| Icons                           | `ic_`              | `ic_star`                    |
| Menu icons and Action Bar icons | `ic_menu`          | `ic_menu_archive`            |
| Tab icons                       | `ic_tab`           | `ic_tab_recent`              |

__Images__
* Images should have `image_` prefix. Example: `image_door`, `image_brewery`, `image_lighthouse`
* If only used in certain part of app, add `image_[page name]_` prefix. Example: `image_tutorial_first`, `image_login_introduction`

__Buttons__
* Image as button’s background image should have `btn_` prefix. Example: `btn_login`, `btn_register`

__Selectors States__
* Applied as suffix on any asset type. Example: `btn_order_normal`, `image_login

| State        | Suffix          | Example                     |
|--------------|-----------------|-----------------------------|
| Normal       | `_normal`       | `btn_order_normal`          |
| Pressed      | `_pressed`      | `btn_order_pressed`         |
| Focused      | `_focused`      | `btn_order_focused`         |
| Disabled     | `_disabled`     | `btn_order_disabled`        |
| Selected     | `_selected`     | `btn_order_selected`        |


### 1.3 Method Names

Method names are written in [lowerCamelCase](http://en.wikipedia.org/wiki/CamelCase).


#### 1.3.1 Method Naming Rules

* Method name should prioritise clarity over brevity. It is more encouraged to have longer but clearer names instead of shorter but ambiguous ones.
* Avoid using abbreviations.
* Use widely-known term for initialisation and operation methods. 
Example: `loadData`, `setupViews`, `validateForm`. Avoid `fetchData`, `buildViews`, `validate`.


#### 1.3.2 Method as Delegate

* When creating custom delegate methods, an unnamed first parameter should be the delegate source.
* Use delegate name as function’s name while differentiating its purpose on its parameters.

Preferred:
```
func namePickerView(_ namePickerView: NamePickerView, didSelectName name: String)
func namePickerView(_ namePickerView: NamePickerView, didChangeValue value: Int)
func namePickerShouldReload(_ namePickerView: NamePickerView) -> Bool
```

Not Preferred:
```
func didSelectName(namePicker: NamePickerViewController, name: String)
func namePickerShouldReload() -> Bool
```


#### 1.3.3 Method Name Semantic

* Remove unnecessary words, while maintaining clarity.
Example: `func remove(at position: Index) -> Bool` instead of `func removeElement(_ position: Index) -> Bool` 

* Prefer method and function names that make use sites form grammatical English phrases.
```
x.insert(y, at: z)			“x, insert y at z”
x.subViews(havingColor: y)	“x’s subviews having color y”
x.capitalizeNouns()		“x, capitalize nouns”
```
instead of
```
x.insert(y, position: z)
x.subViews(color: y)
x.nounsCapitalize()
```

* Begin names of factory methods with `make`.
Example: `makeIterator()`, `makeArray(of object: Any, from source: Any)`


#### 1.3.4 Mutating Method Pairs

Often a mutating method will have a nonmutating variant with similar semantics, but that returns a new value rather than updating an instance in-place.

* When an operation is naturally described by a verb, use the verb’s imperative for the mutated method and apply the `ed` or `ing` suffix to its nonmutating counterpart.
Mutating: `x.sort()`, `x.append(y)` <- Value changed in-place.
Nonmutating: `z = x.sorted()`, `z = x.appending(y)` <- Value changed in another variable.


#### 1.3.5 Boolean Values

Uses of boolean methods and properties should read as assertions about the receiver when the use is nonmutating.
Example: `x.isEmpty()`, `y.intersects(z)`


#### 1.3.6 Markdown

Methods that are too complex, or requires extra information should be documented.
Refer to [Swift Documentation](http://nshipster.com/swift-documentation/)


### 1.4 Variable Names

Variable names are written in [lowerCamelCase](http://en.wikipedia.org/wiki/CamelCase).


#### 1.4.1 Variable Naming Rules

* Use US English spelling.
Example: `let color = “red”` instead of `let colour = “red”`

* Avoid using Swift’s variable types as name.
Example: `var greeting = “Hello”` instead of `var string = “Hello”`.

* User grammatically correct terms to describe boolean variable.
Example: `let isLoading = false`, `let hasValue = true` instead of `let loading = false`, `let valued = true`


***fin***
