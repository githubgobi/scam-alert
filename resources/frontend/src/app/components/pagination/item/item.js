import CSSUtil from './../../../utils/css';
import ComponentMixin from './../../../mixins/component';
import ElementMixin from './../../../mixins/element';
import SlotMixin from './../../../mixins/slot';

export default {
  /**
   * The name of the component.
   */
  name: 'pagination-item',

  /**
   * The element name of the component.
   */
  element: 'item',

  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * If the item is active.
     */
    isActive: {
      type: Boolean,
      required: false,
      default() {
        return false;
      },
    },

    /**
     * If the item is enabled.
     */
    isEnabled: {
      type: Boolean,
      required: false,
      default() {
        return true;
      },
    },
  },

  /**
   * The computed properties for the component.
   */
  computed: {
    /**
     * Get the CSS module class names.
     *
     * @returns {Array} The CSS module class names.
     */
    classNames() {
      const classNames = CSSUtil
        .getElementClasses(this.block, this.$options.element, this.getVariants);

      if (this.isActive) {
        classNames.push(CSSUtil.variant(this.getElementClassName, 'active'));
      }

      if (!this.isEnabled) {
        classNames.push(CSSUtil.variant(this.getElementClassName, 'disabled'));
      }

      return classNames.map(className => this.getClass(className));
    },
  },

  /**
   * The methods which the component can use.
   */
  methods: {
    /**
     * This method will emit the @click event to the parent.
     */
    emitClick() {
      if (this.isEnabled) {
        this.$emit('click');
      }
    },
  },

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    ComponentMixin,
    ElementMixin,
    SlotMixin,
  ],
};