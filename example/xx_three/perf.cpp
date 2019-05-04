#include <xx_three/xx_three.h>
#include <gfx-pbr/Api.h>

#include <stl/array.h>
#include <stl/vector.hpp>

using namespace two;

EX(xx_perf)
{
#if UI
	UNUSED(dockbar);
	SceneViewer& viewer = ui::scene_viewer(parent);
	Scene& scene = viewer.m_scene;
#else
	static Scene scene = Scene(app.m_gfx);
	static GfxViewer viewer = GfxViewer(window, scene);
#endif

	//scene.background = new THREE.Color(0xffffff);

	struct Object { Node3* node; vec3 position; vec3 angles; vec3 scale; };
	static vector<Object> objects = {};

	if(init)
	{
		Camera& camera = viewer.m_camera;
		camera.m_near = 1.f; camera.m_far = 10'000.f; camera.m_fov = 60.f;
		camera.m_eye.z = 3'200.f;

		Program& normal = app.m_gfx.programs().fetch("normal");
		//static Program& normal = app.m_gfx.programs().fetch("pbr/pbr");

		Material& material = app.m_gfx.materials().create("normal", [&](Material& m) {
			m.m_program = &normal;
		});

		Model& suzanne = gfx::model_suzanne(app.m_gfx);

		objects.clear();
		for(size_t i = 0; i < 5000; i++)
		{
			vec3 position = vec3(randf(), randf(), randf()) * 8000.f - 4000.f;
			vec3 angles = vec3(randf() * c_2pi, randf() * c_2pi, 0.f);
			vec3 scale = vec3(randf() * 50 + 100);

			Node3& n = gfx::nodes(scene).add(Node3(position, quat(angles), scale));
			Item& it = gfx::items(scene).add(Item(n, suzanne, 0U, &material));
			UNUSED(it);

			objects.push_back({ &n, position, angles, scale });
		}
	}

	static vec2 mouse = vec2(0.f);
#if UI
	if(MouseEvent event = viewer.mouse_event(DeviceType::Mouse, EventType::Moved))
	{
		mouse = (event.m_relative - viewer.m_frame.m_size / 2.f) * 10.f;
	}
#endif

	Camera& camera = viewer.m_camera;
	camera.m_eye.x += (mouse.x - camera.m_eye.x) * .05f;
	camera.m_eye.y += (-mouse.y - camera.m_eye.y) * .05f;

	for(Object& o : objects)
	{
		o.angles.x += 0.01f;
		o.angles.y += 0.02f;

		o.node->apply(o.position, quat(o.angles), o.scale);
	}
}