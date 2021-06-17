# Defining additional properties

 While the OpenAPI Specification tries to accommodate most use cases, additional data can be added to extend the specification at certain points.  
The field name MUST begin with _x-_, for example, _x-internal-id._  
The value can be null, a primitive, an array or an object.  
When the value is an object or an array of object, the object's fields names do not need to start with _x-_.  
The extensions may or may not be supported by the available tooling, but those may be extended as well to add requested support \(if tools are internal or open-sourced\).

