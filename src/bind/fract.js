Module['stl'] = Module['stl'] || {};
// Circlifier
function Circlifier(a0) {
    assert(checkClass(a0, Image256), '[ERROR] Circlifier(0:image): expected Image256');
    this.__ptr = _mud_Circlifier__construct_1(/*image*/a0.__ptr); this.__type = Circlifier.__type; getCache(Circlifier)[this.__ptr] = this;
};
Circlifier.prototype = Object.create(WrapperObject.prototype);
Circlifier.prototype.constructor = Circlifier;
Circlifier.prototype.__class = Circlifier;
Circlifier.__cache = {};
Module['Circlifier'] = Circlifier;
Circlifier.prototype["__destroy"] = Circlifier.prototype.__destroy = function() {
    _mud_Circlifier__destroy(this.__ptr);
};
// Fract
function Fract(a0) {
    if (a0 === undefined) {  }
    else { assert(typeof a0 === 'number', '[ERROR] Fract(0:num_tabs): expected integer'); }
    if (a0 === undefined) { this.__ptr = _mud_Fract__construct_0(); this.__type = Fract.__type; getCache(Fract)[this.__ptr] = this; }
    else { this.__ptr = _mud_Fract__construct_1(/*num_tabs*/a0); this.__type = Fract.__type; getCache(Fract)[this.__ptr] = this; }
};
Fract.prototype = Object.create(WrapperObject.prototype);
Fract.prototype.constructor = Fract;
Fract.prototype.__class = Fract;
Fract.__cache = {};
Module['Fract'] = Fract;
Fract.prototype["generate"] = Fract.prototype.generate = function(a0) {
    if (a0 === undefined) {  }
    else { assert(typeof a0 === 'number', '[ERROR] generate(0:num_tabs): expected integer'); }
    if (a0 === undefined) { _mud_Fract_generate_0(this.__ptr); }
    else { _mud_Fract_generate_1(this.__ptr, /*num_tabs*/a0); }
};
Fract.prototype["regen"] = Fract.prototype.regen = function() {
    
    _mud_Fract_regen_0(this.__ptr);
};
Fract.prototype["render"] = Fract.prototype.render = function(a0, a1, a2, a3) {
    assert(checkClass(a0, Rect), '[ERROR] render(0:rect): expected Rect'); assert(checkClass(a1, Pattern), '[ERROR] render(1:pattern): expected Pattern'); assert(checkClass(a2, v2_uint), '[ERROR] render(2:resolution): expected v2<uint>'); assert(checkClass(a3, Image256), '[ERROR] render(3:output_image): expected Image256');
    _mud_Fract_render_4(this.__ptr, /*rect*/a0.__ptr, /*pattern*/a1.__ptr, /*resolution*/a2.__ptr, /*output_image*/a3.__ptr);
};
Fract.prototype["render_whole"] = Fract.prototype.render_whole = function(a0, a1, a2) {
    assert(checkClass(a0, Pattern), '[ERROR] render_whole(0:pattern): expected Pattern'); assert(checkClass(a1, v2_uint), '[ERROR] render_whole(1:resolution): expected v2<uint>'); assert(checkClass(a2, Image256), '[ERROR] render_whole(2:output_image): expected Image256');
    _mud_Fract_render_whole_3(this.__ptr, /*pattern*/a0.__ptr, /*resolution*/a1.__ptr, /*output_image*/a2.__ptr);
};
Object.defineProperty(Fract.prototype, "nutabs", {
    get: function() {
        return _mud_Fract__get_nutabs(this.__ptr);
    },
    set: function(value) {
        _mud_Fract__set_nutabs(this.__ptr, value);
    }
});
Fract.prototype["__destroy"] = Fract.prototype.__destroy = function() {
    _mud_Fract__destroy(this.__ptr);
};
// FractSample
function FractSample(a0, a1, a2) {
    assert(checkClass(a0, Fract), '[ERROR] FractSample(0:fract): expected Fract'); assert(checkClass(a1, Rect), '[ERROR] FractSample(1:rect): expected Rect'); assert(checkClass(a2, v2_uint), '[ERROR] FractSample(2:resolution): expected v2<uint>');
    this.__ptr = _mud_FractSample__construct_3(/*fract*/a0.__ptr, /*rect*/a1.__ptr, /*resolution*/a2.__ptr); this.__type = FractSample.__type; getCache(FractSample)[this.__ptr] = this;
};
FractSample.prototype = Object.create(WrapperObject.prototype);
FractSample.prototype.constructor = FractSample;
FractSample.prototype.__class = FractSample;
FractSample.__cache = {};
Module['FractSample'] = FractSample;
FractSample.prototype["render"] = FractSample.prototype.render = function(a0, a1) {
    assert(checkClass(a0, Pattern), '[ERROR] render(0:pattern): expected Pattern'); assert(checkClass(a1, Image256), '[ERROR] render(1:outputImage): expected Image256');
    _mud_FractSample_render_2(this.__ptr, /*pattern*/a0.__ptr, /*outputImage*/a1.__ptr);
};
Object.defineProperty(FractSample.prototype, "fract", {
    get: function() {
        return wrapPointer(_mud_FractSample__get_fract(this.__ptr), Fract);
    }});
Object.defineProperty(FractSample.prototype, "rect", {
    get: function() {
        return wrapPointer(_mud_FractSample__get_rect(this.__ptr), Rect);
    },
    set: function(value) {
        _mud_FractSample__set_rect(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(FractSample.prototype, "resolution", {
    get: function() {
        return wrapPointer(_mud_FractSample__get_resolution(this.__ptr), v2_uint);
    },
    set: function(value) {
        _mud_FractSample__set_resolution(this.__ptr, value.__ptr);
    }
});
FractSample.prototype["__destroy"] = FractSample.prototype.__destroy = function() {
    _mud_FractSample__destroy(this.__ptr);
};
// FractTab
function FractTab() {
    
    this.__ptr = _mud_FractTab__construct_0(); this.__type = FractTab.__type; getCache(FractTab)[this.__ptr] = this;
};
FractTab.prototype = Object.create(WrapperObject.prototype);
FractTab.prototype.constructor = FractTab;
FractTab.prototype.__class = FractTab;
FractTab.__cache = {};
Module['FractTab'] = FractTab;
FractTab.prototype["__destroy"] = FractTab.prototype.__destroy = function() {
    _mud_FractTab__destroy(this.__ptr);
};
// Pattern
function Pattern(a0, a1, a2, a3) {
    if (a0 === undefined) {  }
    else if (a2 === undefined) { assert(checkClass(a0, Palette), '[ERROR] Pattern(0:palette): expected Palette'); assert(typeof a1 === 'number', '[ERROR] Pattern(1:sampling): expected integer'); }
    else if (a3 === undefined) { assert(checkClass(a0, Palette), '[ERROR] Pattern(0:palette): expected Palette'); assert(typeof a1 === 'number', '[ERROR] Pattern(1:sampling): expected integer'); assert(typeof a2 === 'number', '[ERROR] Pattern(2:precision): expected number'); }
    else { assert(checkClass(a0, Palette), '[ERROR] Pattern(0:palette): expected Palette'); assert(typeof a1 === 'number', '[ERROR] Pattern(1:sampling): expected integer'); assert(typeof a2 === 'number', '[ERROR] Pattern(2:precision): expected number'); assert(typeof a3 === 'number', '[ERROR] Pattern(3:step): expected integer'); }
    if (a0 === undefined) { this.__ptr = _mud_Pattern__construct_0(); this.__type = Pattern.__type; getCache(Pattern)[this.__ptr] = this; }
    else if (a2 === undefined) { this.__ptr = _mud_Pattern__construct_2(/*palette*/a0.__ptr, /*sampling*/a1); this.__type = Pattern.__type; getCache(Pattern)[this.__ptr] = this; }
    else if (a3 === undefined) { this.__ptr = _mud_Pattern__construct_3(/*palette*/a0.__ptr, /*sampling*/a1, /*precision*/a2); this.__type = Pattern.__type; getCache(Pattern)[this.__ptr] = this; }
    else { this.__ptr = _mud_Pattern__construct_4(/*palette*/a0.__ptr, /*sampling*/a1, /*precision*/a2, /*step*/a3); this.__type = Pattern.__type; getCache(Pattern)[this.__ptr] = this; }
};
Pattern.prototype = Object.create(WrapperObject.prototype);
Pattern.prototype.constructor = Pattern;
Pattern.prototype.__class = Pattern;
Pattern.__cache = {};
Module['Pattern'] = Pattern;
Pattern.prototype["__destroy"] = Pattern.prototype.__destroy = function() {
    _mud_Pattern__destroy(this.__ptr);
};
Module['generate_fract'] = function(a0, a1, a2) {
    assert(checkClass(a0, v2_uint), '[ERROR] generate_fract(0:resolution): expected v2<uint>'); assert(checkClass(a1, Pattern), '[ERROR] generate_fract(1:pattern): expected Pattern'); assert(checkClass(a2, Image256), '[ERROR] generate_fract(2:output_image): expected Image256');
    _mud_generate_fract_3(/*resolution*/a0.__ptr, /*pattern*/a1.__ptr, /*output_image*/a2.__ptr);
};

(function() {
    function setup() {
        Circlifier.__type = _mud_Circlifier__type();
        Fract.__type = _mud_Fract__type();
        FractSample.__type = _mud_FractSample__type();
        FractTab.__type = _mud_FractTab__type();
        Pattern.__type = _mud_Pattern__type();
        // PatternSampling
        Module['PatternSampling'] = Module['PatternSampling'] || {};
        Module['PatternSampling']['X'] = _mud_PatternSampling_X();
        Module['PatternSampling']['XY'] = _mud_PatternSampling_XY();
        Module['PatternSampling']['Depth'] = _mud_PatternSampling_Depth();
    }
    if (Module['calledRun']) setup();
    else addOnPreMain(setup);
})();
