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
 *   $content['top']: Content in the top.
 *   $content['main']: Content in the main section.
 *   $content['middle_above']: Content in the middel above.
 *   $content['middle']: Content in the middel.
 *   $content['middle_below']: Content in the middel below.
 *   $content['bottom']: Content in the bottom.
 */
?>
<div class="" <?php if (!empty($css_id)) {print "id=\"$css_id\"";} ?>>
  <div class="">
    <div class="l-group bg-pattern-turquoise"><?php print $content['top']; ?></div>
    <div class="l-group section-wrap"><?php print $content['main']; ?></div>
    <div class="l-group section-wrap section-wrap--tight"><?php print $content['middle_above']; ?></div>
    <div class="l-group section-wrap"><div class="group team-grid__wrapper"><?php print $content['middle']; ?></div></div>
    <div class="l-group section-wrap section-wrap--tight bg-gray">
      <div class="group row-center leads-group__wrapper"><?php print $content['middle_below']; ?></div>
    </div>
    <div class="l-group section-wrap"><div class="group logo-grid__wrapper"><?php print $content['bottom']; ?></div></div
  </div>
</div>
