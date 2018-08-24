/*
Title: iOS Code Conventions
Description: Internal conventions for swift code
*/

# iOS Code Conventions

RGB’s internal conventions for iOS code style, formatting and other conventions.
Taken from [Ray Wenderlich’s Swift Style Guide](https://github.com/raywenderlich/swift-style-guide).
Taken from [Eure’s Swift Style Guide](https://github.com/eure/swift-style-guide#table-of-contents).
Taken from [Vokal’s Coding Standards](https://engineering.vokal.io/iOS/CodingStandards/Swift.md.html).

These guidelines here try to accomplish/encourage practices with following goals:

- to make it hard to write programmer errors, or at least make them hard to miss
- to increase readability and clarity of intent, *with assumption that the code will be reviewed/consumed by a different person*
- to minimize unnecessary code bloat
- to observe aesthetics that the majority of the team voted for


# Table of Contents
- [Best Practice](#best-practice)
- [Styles](#1.-styles)
	- [Class Order](#1.1-class-order)
	- [Formatting](#1.2-formatting)
		- [Whitespaces](#1.2.1-whitespaces)
		- [Declarations] (#1.2.2-declarations)		
- [Conventions](#2.-conventions)
	- [Code Organization](#2.1-code-organization)
	- [Closures](#2.2-closures)
	- [Types](#2.3-types)
	- [Constants](#2.4-constants)
	- [Optionals](#2.5-optionals)
	- [Initializations](#2.6-initializations)
	- [Functions v Methods](#2.7-functions-v-methods)
	- [Dynamisms](#2.8-dynamisms)
	- [Access Modifiers](#2.9-access-modifiers)
	- [Sequence Types](#2.10-sequence-types)
	- [Control Flows](#2.11-control-flows)
	- [Retain Cycles](#2.12-retain-cycles)


## Best Practice

In general, all **XCode warnings should not be ignored.** These include things like using `let` instead of `var` when possible, using `_` in place of unused variables, etc.
Keep codes as clean as possible.

- Delete unused codes
- Delete unused comments
- Simple refactor from time to time
- Be tidy with project structure
- Mind simple whitespaces (those with perfectionism and OCD might kill you for an extra blank line)

Always pretend that someone much superior than you, a Super-Saiyan iOS Developer from North Korea will review your code.
That if you make a slightest mistake, he’d nuke you.

## 1. Styles

### 1.1 Class Order

Basic/Base view controller should have code order as follows:

- Imports
- Class
- IBOutlets (if any)
- Variables (if any)
- UI Variables (if any)
- View Lifecycle Functions (`viewDidLoad`, `viewDidAppear`, `awakeFormNib`, etc.)
- Helper Methods (if any)
- Action Methods (if any) (`IBActions`, `gestureRecognizer`, etc.)
- Protocol/Delegate Extensions


Example:
```swift
import UIKit
import Foundation

class LoginViewController: UIViewController {
	
	// MARK: IBOutlets
	@IBOutlet dynamic weak var loginButton: UIButton!
	@IBOutlet dynamic weak var usernameTextField: UITextField!
	@IBOutlet dynamic weak var passwordTextField: UITextField!

	// MARK: Variables
	var username = “”
	var password = “”

	// MARK: UI Variables
	lazy var refreshControl: UIRefreshControl = {
		let refreshControl = UIRefreshControl()
		return refreshControl
	}

	// MARK: View Lifecycle
	override func viewDidLoad() {
		super.viewDidLoad()
		
		// Call Setup
		setupViews()
		loadData()
	}

	override func viewDidAppear(_ animated: Bool) {
		super.viewDidAppear(animated)
	}

	// MARK: - Helpers
	private func setupViews() {
		// Setup Table View
		tableView.registerNib(...)
	}

	private func loadData() {
		// ...
	}

	// MARK: - Actions
	@IBAction func loginButtonTapped(_ sender: UIButton) {
		// ...
	}

	@IBAction func textFieldDidChange(_ sender: UITextField) {
		// ...
	}
}

// MARK: - Scroll View Extension
extension LoginViewController: UIScrollViewDelegate {
	func scrollView(didScroll scrollView: UIScrollView) {
		// ...
	}
}
```

Other class such as `UIView`, `UITableViewCell`, `UICollectionViewCell` should conform similar method as well.

Example:
```swift
import UIKit

class ListTableViewCell: UITableViewCell {
	
	// MARK: IBOutlets
	@IBOutlet dynamic weak var titleLabel: UILabel!
	@IBOutlet dynamic weak var subtitleLabel: UILabel!

	// MARK: Variables
	var isHidden 	= false
	var title		= “”
	var subtitle	= “”

	// MARK: View Lifecycle
	override func awakeFromNib() {
		super.awakeFromNib()

		setupViews()
	}

	// MARK: - Helpers
	private func setupViews() {
		titleLabel.text = title
		subtitleLabel.text = subtitle
	}
}
```

### 1.1 Formatting

#### 1.1.1 Whitespaces

**Lines**

There should be exactly one blank line between methods to aid in visual clarity and organization. Whitespace within methods should separate functionality, but having too many sections in a method often means you should refactor into several methods.

Example:
```swift
class LoginViewController: UIViewController {

	// MARK: IBOutlets
	@IBOutlet dynamic weak var loginButton: UIButton!
	@IBOutlet dynamic weak var textField: UITextField!

	// MARK: Vars
	var one = “”
	var two = “”
```


**Indentation**

Use 4 spaces for tabs. (Default XCode setting for indentation)

<img width="749" alt="screen shot 2016-02-10 at 15 29 59" src="https://cloud.githubusercontent.com/assets/3029684/12940329/3566d882-d00b-11e5-9c2d-344f5c5f70e5.png" />


**Spaces**

Method braces and other braces (`if`/`else`/`switch`/`while` etc.) always open on the same line as the statement but close on a new line.

Preferred:
```swift
if user.isHappy {
	// Do something
} else {
	// Do another thing
}
```

Not Preferred:
```swift
if user.isMad 
{
	// Do something
}
else {
	// Do another thing
}
```

Colons always have no space on the left and one space on the right. Exceptions are the ternary operator `? :`, empty dictionary `[:]` and `#selector` syntax for unnamed parameters `(_:)`.

Preferred:
```swift
class TestDatabase: Database {
	var data: [String: CGFloat] = ["A": 1.2, "B": 3.2]
}
```

Not Preferred:
```swift
class TestDatabase : Database {
	var data :[String:CGFloat] = ["A" : 1.2, "B":3.2]
}
```

* Avoid trailing whitespaces at the ends of lines.

* Add a single newline character at the end of each file.

* Use single spaces around return arrows (`->`) both in functions and in closures.

Preferred:
```swift
func doSomething(value: Int) -> Int {
    // Do something
}
```

Not Preferred:
```swift
func doSomething(value: Int)->Int {
	// Do something
}
```

**Braces**

Open braces (`{`) of closures should be one space following the previous non-whitespace character.

Example:
```swift
func openMenu() {
	// Do something
}
```

This rule however, doesn’t apply to instances’ `didSet{}` property with only one line.
```swift
@IBOutlet dynamic weak var imageView: UIImageView! { didSet { tableView.reloadData()  }}
var shouldUpdate: Bool = false { didSet { tableView.reloadData() }}
```

Close braces (`}`) should not have empty lines before it. For single line expressions enclosed in braces, there should be one space between the last statement and the closing brace.

Preferred:
```swift
class Button {

    var didTap: (sender: Button) -> Void = { _ in }

    func tap() {
        self.didTap()
    }
}
```

Not Preferred:
```swift
class Button {

	var didTap: (sender: Button) -> Void = { _ in}

	func tap() {
		self.didTap()

	}
}
```

First line of a function/method should have one blank line before actual code. But this blank line can be used as comment line.

Example:
```swift
func openMenu() {
	// Setup Menu
	let menu = UIView()
	view.addSubview(menu)
}
```
or
```
func closeMenu() {

	menu.removeFromSuperview(view)
}
```

**Switch**

`case` statements should be left-aligned with the `switch` statement. Single-line `case` statements can be inlined and written compact. Multi-line `case` statements should be indented below `case:` and separated with one empty line.

Preferred:
```swift
switch result {

case .Success:
    self.doSomething()
    self.doSomethingElse()
    
case .Failure:
	self.doSomething()
	self.doSomethingElse()
}
```

Not Preferred:
```swift
switch result {

case .Success: self.doSomething()
	self.doSomethingElse()
    
case .Failure: self.doSomething()
	self.doSomethingElse()
}
```

**Condition**

Conditions for `if`, `switch`, `for`, and `while` statements should not be enclosed in parentheses (`()`).

Preferred:
```swift
if array.isEmpty {
	// ...
}
```

Not Preferred:
```swift
if (array.isEmpty) {
	// ...
}


#### 1.2.2 Declarations

**Declaration Order**

All type declarations such as `struct`, `enum`, `extension`, and `protocol`s, should be marked with `// MARK: - <name of declaration>` (with hyphen)

Example:
```swift
// MARK: - Icon <- optional
class Icon {

   	// MARK: - CornerType
	enum CornerType {
    
     	case Square
     	case Rounded
     }

	// MARK: - Helpers
	func helperMethod() {
		// Do something
	}
}

// MARK: - Icon Extension
extension Icon {
	...
}
```

Type groups however, should be marked without appending `-` (dash) character. `// MARK: <name of type group>`

Example:
```swift
	// MARK: Vars
	var one: Int
	var two: Int

	// MARK: Constants
	let lOne: Int
	let lTwo: Int
```

* Declaration order has been defined in [Class Order](#1.1-class-order)



## 2. Conventions

### 2.1 Code Organization

Use extensions to organize your code into logical blocks of functionality. Each extension should be set off with a `// MARK: -` comment to keep things well-organized.

**Protocol Conformance**

In particular, when adding protocol conformance to a model, prefer adding a separate extension for the protocol methods. This keeps the related methods grouped together with the protocol and can simplify instructions to add a protocol to a class with its associated methods.

Preferred:
```swift
class MyViewController: UIViewController {
	// class stuff here
}

// MARK: - UITableViewDataSource & UITableViewDelegate
extension MyViewController: UITableViewDataSource, UITableViewDelegate {
	// table view data source methods
}

// MARK: - UIScrollViewDelegate
extension MyViewController: UIScrollViewDelegate {
	// scroll view delegate methods
}
```

Not Preferred:
```swift
class MyViewController: UIViewController, UITableViewDataSource, UIScrollViewDelegate {
	// all methods
}
```

Since the compiler does not allow you to re-declare protocol conformance in a derived class, it is not always required to replicate the extension groups of the base class. This is especially true if the derived class is a terminal class and a small number of methods are being overridden. When to preserve the extension groups is left to the discretion of the author.

For a more enterprise project, consider grouping lifecycle, custom accessor, and IBAction in separate class extensions.


### 2.2 Closures

Use trailing closure syntax only if there's a single closure expression parameter at the end of the argument list. Give the closure parameters descriptive names.

Preferred:
```swift
UIView.animate(withDuration: 1.0) {
	self.myView.alpha = 0
}

UIView.animate(withDuration: 1.0, animations: {
	self.myView.alpha = 0
}, completion: { finished in
	self.myView.removeFromSuperview()
})
```

Not Preferred:
```swift
UIView.animate(withDuration: 1.0, animations: {
	self.myView.alpha = 0
})

UIView.animate(withDuration: 1.0, animations: {
	self.myView.alpha = 0
}) { f in
	self.myView.removeFromSuperview()
}
```

For single-expression closures where the context is clear, use implicit returns:

```swift
attendeeList.sort { a, b in
	a > b
}
```

Chained methods using trailing closures should be clear and easy to read in context. Decisions on spacing, line breaks, and when to use named versus anonymous arguments is left to the discretion of the author. Examples:

```swift
let value = numbers.map { $0 * 2 }.filter { $0 % 3 == 0 }.index(of: 90)

let value = numbers
  .map {$0 * 2}
  .filter {$0 > 50}
  .map {$0 + 10}
```


### 2.3 Types

Always use Swift's native types when available. Swift offers bridging to Objective-C so you can still use the full set of methods as needed.

**Preferred:**
```swift
let width = 120.0                                    // Double
let widthString = (width as NSNumber).stringValue    // String
```

**Not Preferred:**
```swift
let width: NSNumber = 120.0                          // NSNumber
let widthString: NSString = width.stringValue        // NSString
```

In Sprite Kit code, use `CGFloat` if it makes the code more succinct by avoiding too many conversions.


### 2.4 Constants

Constants are defined using the `let` keyword, and variables with the `var` keyword. Always use `let` instead of `var` if the value of the variable will not change.

**Tip:** A good technique is to define everything using `let` and only change it to `var` if the compiler complains!

You can define constants on a type rather than on an instance of that type using type properties. To declare a type property as a constant simply use `static let`. Type properties declared in this way are generally preferred over global constants because they are easier to distinguish from instance properties. Example:

Preferred:
```swift
enum Math {
	static let e = 2.718281828459045235360287
	static let root2 = 1.41421356237309504880168872
}

let hypotenuse = side * Math.root2

```
**Note:** The advantage of using a case-less enumeration is that it can't accidentally be instantiated and works as a pure namespace.

Not Preferred:
```swift
let e = 2.718281828459045235360287  // pollutes global namespace
let root2 = 1.41421356237309504880168872

let hypotenuse = side * root2 // what is root2?
```

* Static Methods and Variable Type Properties

Static methods and type properties work similarly to global functions and global variables and should be used sparingly. They are useful when functionality is scoped to a particular type or when Objective-C interoperability is required.


### 2.5 Optionals

Declare variables and function return types as optional with `?` where a nil value is acceptable.

Use implicitly unwrapped types declared with `!` only for instance variables that you know will be initialized later before use, such as subviews that will be set up in `viewDidLoad`.

When accessing an optional value, use optional chaining if the value is only accessed once or if there are many optionals in the chain:

```swift
self.textContainer?.textLabel?.setNeedsDisplay()
```

Use optional binding when it's more convenient to unwrap once and perform multiple operations:

```swift
if let textContainer = self.textContainer {
	// do many things with textContainer
}
```

When naming optional variables and properties, avoid naming them like `optionalString` or `maybeView` since their optional-ness is already in the type declaration.

For optional binding, shadow the original name when appropriate rather than using names like `unwrappedView` or `actualLabel`.

Preferred:
```swift
var subview: UIView?
var volume: Double?

// later on...
if let subview = subview, let volume = volume {
	// do something with unwrapped subview and volume
}
```

Not Preferred:
```swift
var optionalSubview: UIView?
var volume: Double?

if let unwrappedSubview = optionalSubview {
	if let realVolume = volume {
		// do something with unwrappedSubview and realVolume
	}
}
```


### 2.6 Initializations

Consider using lazy initialization for finer grain control over object lifetime. This is especially true for `UIViewController` that loads views lazily. You can either use a closure that is immediately called `{ }()` or call a private factory method. Example:

```swift
lazy var locationManager: CLLocationManager = self.makeLocationManager()

private func makeLocationManager() -> CLLocationManager {
	let manager = CLLocationManager()
	manager.desiredAccuracy = kCLLocationAccuracyBest
	manager.delegate = self
	manager.requestAlwaysAuthorization()
	return manager
}
```

**Notes:**
  - `[unowned self]` is not required here. A retain cycle is not created.
  - Location manager has a side-effect for popping up UI to ask the user for permission so fine grain control makes sense here.

**Type Inference**

Prefer compact code and let the compiler infer the type for constants or variables of single instances. Type inference is also appropriate for small (non-empty) arrays and dictionaries. When required, specify the specific type such as `CGFloat` or `Int16`.

Preferred:
```swift
let message = "Click the button"
let currentBounds = computeViewBounds()
var names = ["Mic", "Sam", "Christine"]
let maximumWidth: CGFloat = 106.5
```

Not Preferred:
```swift
let message: String = "Click the button"
let currentBounds: CGRect = computeViewBounds()
let names = [String]()
```

**Type Annotation for Empty Arrays and Dictionaries**

For empty arrays and dictionaries, use type annotation. (For an array or dictionary assigned to a large, multi-line literal, use type annotation.)

Preferred:
```swift
var names: [String] = []
var lookup: [String: Int] = [:]
```

Not Preferred:
```swift
var names = [String]()
var lookup = [String: Int]()
```

**NOTE**: Following this guideline means picking descriptive names is even more important than before.


**Syntactic Sugar**

Prefer the shortcut versions of type declarations over the full generics syntax.

Preferred:
```swift
var deviceModels: [String]
var employees: [Int: String]
var faxNumber: Int?
```

Not Preferred:
```swift
var deviceModels: Array<String>
var employees: Dictionary<Int, String>
var faxNumber: Optional<Int>
```


### 2.7 Functions v Methods

Free functions, which aren't attached to a class or type, should be used sparingly. When possible, prefer to use a method instead of a free function. This aids in readability and discoverability.

Free functions are most appropriate when they aren't associated with any particular type or instance.

Preferred:
```swift
let sorted = items.mergeSorted()  // easily discoverable
rocket.launch()  // acts on the model
```

Not Preferred:
```swift
let sorted = mergeSort(items)  // hard to discover
launch(&rocket)
```

**Free Function Exceptions**
```swift
let tuples = zip(a, b)  // feels natural as a free function (symmetry)
let value = max(x, y, z)  // another free function that feels natural
```


### 2.8 Dynamisms

All Objective-C `protocol` implementations, whether properties or methods, should be prefixed with `@objc dynamic`

Preferred:
```swift
@objc dynamic func scrollViewDidScroll(scrollView: UIScrollView) {
    // ...
}
```

Not Preferred:
```swift
func scrollViewDidScroll(scrollView: UIScrollView) {
    // ...
}
```

***Rationale:*** Prevents horrible compiler optimization bugs. Trust us.

All `IBAction`s and `IBOutlet`s should be declared `dynamic`.
`IBOutlet`s should be declared weak. Exception for `tableView`.

Example:
```swift
@IBOutlet private dynamic weak var closeButton: UIButton!

@IBAction private dynamic func closeButtonTouchUpInside(sender: UIButton) {
    // ...
}
```


### 2.9 Access Modifiers

Design declarations as `private` by default and only expose as `internal` or `public` as the needs arise.

***Rationale:*** This helps prevent pollution of XCode's auto-completion. In theory this should also help the compiler make better optimizations and build faster.


For library modules: all declarations should explicitly specify either `public`, `internal`, or `private`.

Preferred:
```swift
private let defaultTimeout: NSTimeInterval = 30

internal class NetworkRequest {
    // ...
}
```

Not Preferred:
```swift
let defaultTimeout: NSTimeInterval = 30

class NetworkRequest {
    // ...
}
```

***Rationale:*** Makes the intent clear for API consumers.


For application modules: `public` access is prohibited unless required by a protocol. The `internal` keyword may or may not be written, but the `private` keyword is required.

Preferred:
```swift
private let someGlobal = "someValue"

class AppDelegate {
    // ...
    private var isForeground = false
}
```

Not Preferred:
```swift
public let someGlobal = "someValue"

public class AppDelegate {
    // ...
    var isForeground = false
}
```

***Rationale:*** A `public` declaration in an app bundle does not make sense. In effect, declarations are assumed to be either `internal` or `private`, in which case it is sufficient to just require `private` explicitly.


Access modifiers should be written before all other non-`@` modifiers.

Preferred:
```swift
@objc internal class User: NSManagedObject {
    // ...
    @NSManaged internal dynamic var identifier: Int
    // ...
    @NSManaged private dynamic var internalCache: NSData?
}
```

Not Preferred:
```swift
internal @objc class User: NSManagedObject {
    // ...
    @NSManaged dynamic internal var identifier: Int
    // ...
    private @NSManaged dynamic var internalCache: NSData?
}
```

***Rationale:*** Combined with the [rules on declaration order](#declaration-order), this improves readability when scanning code vertically.


### 2.10 Sequence Types

`.count` should only be used when the count value itself is needed

Example:
```swift
let badgeNumber = unreadItems.count
```

Checking if empty or not:

Preferred:
```swift
if sequence.isEmpty {
// ...
```

Not Preferred:
```
if sequence.count <= 0 {
// ...
```

Getting the first or last item:

Preferred:
```swift
let first = sequence.first
let last = sequence.last
```

Not Preferred:
```swift
let first = sequence[0]
let last = sequence[sequence.count - 1]
```

Removing the first or last item:

Preferred:
```swift
sequence.removeFirst()
sequence.removeLast()
```

Not Preferred:
```swift
sequence.removeAtIndex(0)
sequence.removeAtIndex(sequence.count - 1)
```

Iterating all indexes:

Preferred:
```swift
for i in sequence.indices {
    // ...
}
```

Not Preferred:
```swift
for i in 0 ..< sequence.count {
    // ...
}
```

Getting the first or last index:

Preferred:
```swift
let first = sequence.indices.first
let last = sequence.indices.last
```

Not Preferred:
```swift
let first = 0
let last = sequence.count - 1
```

Iterating all indexes except the last `n` indexes:

Preferred:
```swift
for i in sequence.indices.dropLast(n) {
    // ...
}
```

Not Preferred:
```swift
for i in 0 ..< (sequence.count - n) {
    // ...
}
```

Iterating all indexes except the first `n` indexes:

Preferred:
```swift
for i in sequence.indices.dropFirst(n) {
    // ...
}
```

Not Preferred:
```swift
for i in n ..< sequence.count {
    // ...
}
```

***In general, if you have to add or subtract to `count`, there is probably a better, Swift-y way to do it.***

***Rationale:*** Clarity of intent, which in turn reduces programming mistakes (esp. [off-by-one calculation errors](https://en.wikipedia.org/wiki/Off-by-one_error)).



### 2.11 Control Flows

Prefer the `for-in` style of `for` loop over the `while-condition-increment` style.

Preferred:
```swift
for _ in 0..<3 {
	print("Hello three times")
}

for (index, person) in attendeeList.enumerated() {
	print("\(person) is at position #\(index)")
}

for index in stride(from: 0, to: items.count, by: 2) {
	print(index)
}

for index in (0...3).reversed() {
	print(index)
}
```

Not Preferred:
```swift
var i = 0
while i < 3 {
	print("Hello three times")
	i += 1
}

var i = 0
while i < attendeeList.count {
	let person = attendeeList[i]
	print("\(person) is at position #\(i)")
	i += 1
}
```


### 2.12 Retain Cycles

For all non-`@noescape` and non-animation closures, accessing `self` within the closure requires a `[weak self]` declaration.

Preferred
```swift
request.downloadImage(
    url,
    completion: { [weak self] image in

		guard let `self` = self else { return }
		self.didDownloadImage(image)
    }
)
```

Not Preferred:
```swift
self.request.downloadImage(
    url,
    completion: { image in

        self.didDownloadImage(image) // hello retain cycle
    }
)
```

***Rationale:*** Combined with the `self`-requirement rule above, retain cycle candidates are very easy to spot. Just look for closures that access `self` and check for the missing `[weak self]`. 


Never use `unowned` to capture references in closures.

Preferred:
```swift
request.downloadImage(
    url,
    completion: { [weak self] image in

        self?.didDownloadImage(image)
    }
)
```

Not Preferred
```swift
self.request.downloadImage(
    url,
    completion: { [unowned self] image in

        self.didDownloadImage(image)
    }
)
```

***Rationale:*** While `unowned` is more convenient (you don't need to work with an `Optional`) than `weak`, it is also more prone to crashes. Nobody likes zombies.


If the validity of the weak `self` in the closure is needed, bind using the variable `` `self` `` to shadow the original.

Preferred:
```swift
request.downloadImage(
    url,
    completion: { [weak self] image in

        guard let `self` = self else { 
        
            return
        }
        self.didDownloadImage(image)
        self.reloadData()
        self.doSomethingElse()
    }
)
```

Not Preferred:
```swift
self.request.downloadImage(
    url,
    completion: { [weak self] image in

        guard let strongSelf = self else { 
        
            return
        }
        strongSelf.didDownloadImage(image)
        strongSelf.reloadData()
        strongSelf.doSomethingElse()
    }
)
```

***fin***
