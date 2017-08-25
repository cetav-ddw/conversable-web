<?php
/**
 * @file
 * Template for One page panel layout.
 *
 * This template provides a homepage for CONVERSABLE panel display layout.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout. This layout supports the following sections:
 *   $content['left_above']: Content in the left above section.
 *   $content['right_above']: Content in the right above section.
 *   $content['bottom']: Content in the bottom.
 */
?>
<div class="" <?php if (!empty($css_id)) {print "id=\"$css_id\"";} ?>>
  <div class="">
  	<div class="l-group section-wrap group event-info">
	    <div class="event-content"><?php print $content['left_above']; ?></div>
	    <div class="event-sidebar"><?php print $content['right_above']; ?></div>
	</div>
    <div class="l-group section-wrap bg-gray">
    	<div class="group"><?php print $content['bottom']; ?></div> 
    </div>
  </div>
</div>
