/*
Title: Android Naming Conventions
Description: Internal conventions for file names, class names, and variable names in the project
*/

# Android Naming Conventions
Internal conventions for file names, class names, and variable names in the project
  
## 1. File Naming

### 1.1 Class files

(taken from [Ribot Android Guidelines](https://github.com/ribot/android-guidelines/blob/master/project_and_code_guidelines.md)):

Class names are written in [UpperCamelCase](http://en.wikipedia.org/wiki/CamelCase).

For classes that extend an Android component, the name of the class should end with the name of the component; for example: `SignInActivity`, `SignInFragment`, `ImageUploaderService`, `ChangePasswordDialog`.

### 1.2 Resources files

Resources file names are written in __lowercase_underscore__.
  
#### 1.2.1 Drawable files
Drawable files are named with the following format `<asset_type>_<description>`. The description should describe the image itself, by its name, characteristic, or its group/classification. If the description contains more than one word separate each word with underscore.

Here is the list of asset types that we use :

| Asset Type    | Prefix             |	Example                      |
|---------------| -------------------|-------------------------------|
| Icon          | `ic_`	             | `ic_star.png`                 |
| Button        | `btn_`	         | `btn_send.png`                |
| Background    | `bg_`	             | `bg_gradient_blue.png`        |
| Placeholder   | `placeholder_`     | `placeholder_article_img.png` |
| (other type)  | `img_`             | `img_getting_started.png`     |

More specifically, icon asset type can be divided into some categories (taken from [Android iconography guidelines](http://developer.android.com/design/style/iconography.html)):

| Asset Type                      | Prefix             | Example                      |
| --------------------------------| ----------------   | ---------------------------- |
| Icons                           | `ic_`              | `ic_star.png`                |
| Launcher icons                  | `ic_launcher`      | `ic_launcher_calendar.png`   |
| Menu icons and Action Bar icons | `ic_menu`          | `ic_menu_archive.png`        |
| Status bar icons                | `ic_stat_notify`   | `ic_stat_notify_msg.png`     |
| Tab icons                       | `ic_tab`           | `ic_tab_recent.png`          |
| Dialog icons                    | `ic_dialog`        | `ic_dialog_info.png`         |

Naming conventions for selector states:

| State	       | Suffix          | Example                     |
|--------------|-----------------|-----------------------------|
| Normal       | `_normal`       | `btn_order_normal.9.png`    |
| Pressed      | `_pressed`      | `btn_order_pressed.9.png`   |
| Focused      | `_focused`      | `btn_order_focused.9.png`   |
| Disabled     | `_disabled`     | `btn_order_disabled.9.png`  |
| Selected     | `_selected`     | `btn_order_selected.9.png`  |

#### 1.2.2 Layout files

Layout files are named with the following format `<component_type>_<description>`. 

`component_type` should follow these rules :
* Layout files should match the name of the Android components that they are intended for but moving the top level component name to the beginning
* If a layout is going to be inflated by an `Adapter`, e.g to populate a `ListView`. In this case, the name of the layout should start with `item_`.
* Note that there are cases where these rules will not be possible to apply. For example, when creating layout files that are intended to be part of other layouts. In this case you should use the prefix `partial_`.

And the `description` should be written from general to more specific information, e.g `product_list` or `product_detail`.

Here is the list of layout file name example based on previous rules :

| Component        | Class Name              | Layout Name                   |
| ---------------- | ----------------------- | ----------------------------- |
| Activity         | `ProductListActivity`   | `activity_product_list.xml`   |
| Activity         | `ProductDetailActivity` | `activity_product_detail.xml` |
| Fragment         | `SignUpFragment`        | `fragment_sign_up.xml`        |
| Dialog           | `ChangePasswordDialog`  | `dialog_change_password.xml`  |
| AdapterView item | ---                     | `item_person.xml`             |
| Partial layout   | ---                     | `partial_stats_bar.xml`       |

#### 1.2.3 Menu files

Similar to layout files, menu files should match the name of the component. For example, if we are defining a menu file that is going to be used in the `UserActivity`, then the name of the file should be `activity_user.xml`.

A good practice is to not include the word `menu` as part of the name because these files are already located in the `menu` directory.

#### 1.2.4 Values files

Resource files in the values folder should be plural, e.g. `strings.xml`, `styles.xml`, `colors.xml`, `dimens.xml`, `attrs.xml`

### 1.3 Assets files

Additional files used in the project, such as fonts or json data should be placed inside `assets` folder. Each type of files should have a separate folder within `assets`. Folders names are written in plural form, e.g. `fonts`, `data`.

Files names within `assets` should be written in lowercased words connected with hyphens, e.g. `sourceandpro-bold.ttf`, `data-chats.json`

## 2. Variable and Resource Item Naming

### 2.1 Class Field Name

Class field name should follow the naming rules listed below.

* Private, non-static field names start with `m`
* Private, static field names start with `s`
* Other fields start with a lower case letter
* For fields that hold layout components, follow the rule above followed by its component type written in [UpperCamelCase](http://en.wikipedia.org/wiki/CamelCase). If the layout component has an id, use its id name, but write it in `UpperCamelCase`.
* Static final fields (constants) are `ALL_CAPS_WITH_UNDERSCORES`
* Treat acronyms as words

Example:

```
public class MyClass {
    public static final int SOME_CONSTANT = 42;
    public int publicField;
    private static MyClass sSingleton;
    int mPackagePrivate;
    private int mPrivate;
    protected int mProtected;
    private 
}
```
| Good           | Bad            |
| -------------- | -------------- |
| `XmlHttpRequest` | `XMLHTTPRequest` |
| `getCustomerId`  | `getCustomerID`  |
| `String url`     | `String URL`     |
| `long id`        | `long ID`        |

### 2.2 String Resource Item

String names in resource file should follow the naming rules listed below.

* String names are written in `snake_case`
* Consider prefixing with section name or context, so that we know which section/sections it belongs to
* If it is used in more than one section, just use English words that describe the string
* If the string is short enough (no more than 3 words) use that string (in English) written in `snake_case` as its name

Example:
```
<string name="error_name_empty">Nama tidak boleh kosong</string>
<string name="dialog_payment_message">Anda telah berhasil melakukan pembayaran sebesar Rp 10.000</string>
<string name="live_chat_desc">Konsultasikan masalah kesehatan Anda secara langsung kepada kami</string>
<string name="start_chat">Mulai Chat</string>
```

### 2.3 Color Resource Item

These color names should be defined in every project
```
<color name="colorPrimary">{COLOR HEX}</color>
<color name="colorPrimaryDark">`{COLOR HEX}`</color>
<color name="colorAccent">`{COLOR HEX}`</color>
<color name="colorTextPrimary">`{COLOR HEX}`</color>
<color name="colorTextSecondary">`{COLOR HEX}`</color>
<color name="colorBackground">`{COLOR HEX}`</color>
```

If you add any other colors, its name should follow the naming rules listed below.

* Color names are written in `snake_case`
* Treat colors.xml as a color pallete instead of defining colors per element.

| Good               | Bad               |
| ------------------ | ----------------- |
| `blue_transparent` | `button_color`    |
| `warm_grey`        | `card_color`      |

### 2.4 Dimen Resource Item

Treat `dimens.xml` as a palette of typical spacings and sizes in the application instead of individual values of paddings and margins of each component

These are examples of typical spacings and size that can be used
```
<!-- font sizes -->
<dimen name="font_headline">21sp</dimen>
<dimen name="font_large">17sp</dimen>
<dimen name="font_normal">15sp</dimen>
<dimen name="font_small">12sp</dimen>
<dimen name="font_tiny">8sp</dimen>

<!-- spacing between two views -->
<dimen name="spacing_huge">40dp</dimen>
<dimen name="spacing_large">24dp</dimen>
<dimen name="spacing_normal">16dp</dimen>
<dimen name="spacing_small">10dp</dimen>
<dimen name="spacing_tiny">4dp</dimen>
```

### 2.5 Layout Component Id

* Component id should start with the name of its component
* If a component is used many times in layout, like `TextView` or `ImageView`, start its id with short form of the component name, e.g. `tv` or `iv`