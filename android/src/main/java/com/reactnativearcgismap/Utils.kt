package com.reactnativearcgismap


fun getEventTypeConstants(list: List<String>): Map<String, Any> {
  return list.associateWith { mapOf("phasedRegistrationNames" to mapOf("bubbled" to it)) }
}
